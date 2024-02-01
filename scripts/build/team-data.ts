import { Client } from '@notionhq/client'
import dotenv from 'dotenv'
import { createWriteStream, existsSync, promises as fs, readFileSync } from 'fs'
import path from 'path'
import { Readable } from 'stream'
import { finished } from 'stream/promises'
import { BUST_IMAGE_CACHE, isProd } from './lib'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

export type TeamMember = {
  name: string
  role: string
  sort: number
  location: string | null
  showOnTeamPage: boolean
  avatar_url: string
  social: {
    github: string | null
    twitter: string | null
    telegram: string | null
    farcaster: string | null
  }
}

const projectDir = path.resolve(process.cwd())
const dataDir = path.resolve(projectDir, '.next/cache/website-data')
const teamDataFile = path.join(dataDir, 'team.json')

export function getTeamData() {
  if (!existsSync(teamDataFile)) {
    throw new Error('Data file not found (team). Try running `npm run build:data`')
  }
  const data = readFileSync(teamDataFile, 'utf-8')
  return JSON.parse(data) as TeamMember[]
}

// Import within to avoid backend code being bundled in the frontend
export async function buildTeamData() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const directory = await notion.databases.query({
    database_id: '506ed1f60c764df88899baf4ab0fe0be',
  })

  let people = (directory.results as any[]).map((person: any): TeamMember => {
    const name = person.properties.Name.title[0].plain_text
    console.log('person>', name)
    return {
      name,
      role: person.properties.Role.rich_text[0].plain_text,
      sort: person.properties.Sort.number,
      location: person.properties.Location.select?.name || null,
      showOnTeamPage: person.properties['Show on Team Page'].checkbox,
      avatar_url: person.properties.Avatar.files[0].file.url,
      social: {
        github: person.properties.Github.url,
        twitter: person.properties.Twitter.url,
        telegram: person.properties.Telegram.url,
        farcaster: person.properties.Farcaster.url,
      },
    }
  })

  console.log('Found ' + people.length + ' team members')

  // Sort ascending
  people.sort((a, b) => a.sort - b.sort)

  // File url from notion is temporary
  // Save to file system, but first clear out the directory
  const avatarDir = path.resolve(__dirname, '../../public/avatar/team')
  if (BUST_IMAGE_CACHE && existsSync(avatarDir)) {
    await fs.rm(avatarDir, { recursive: true })
  }
  await fs.mkdir(avatarDir, { recursive: true })

  for (let person of people) {
    // const avatar = await fetch(person.avatar_url)
    // const buffer = Buffer.from(await avatar.arrayBuffer())
    const ext = person.avatar_url.match(/(\.[a-z]+)\?/)?.[1]
    if (!ext) {
      throw new Error('No extension found for ' + person.avatar_url)
    }
    const filename = person.name.toLowerCase().replace(/\s/g, '-') + ext
    const dest = path.join(avatarDir, filename)

    if (isProd || !existsSync(dest)) {
      const stream = createWriteStream(dest)
      const { body } = await fetch(person.avatar_url)
      await finished(Readable.fromWeb(body as any).pipe(stream))
    }

    person.avatar_url = '/avatar/team/' + filename
    console.log(dest.replace(projectDir + '/', ''))
  }

  // Write data file
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(teamDataFile, JSON.stringify(people, null, 2), 'utf-8')

  console.log(teamDataFile.replace(projectDir + '/', ''))
}

if (require.main === module) {
  buildTeamData()
}

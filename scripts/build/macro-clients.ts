import { Client } from '@notionhq/client'
import dotenv from 'dotenv'
import { createWriteStream, existsSync, promises as fs, readFileSync } from 'fs'
import path from 'path'
import { Readable } from 'stream'
import { finished } from 'stream/promises'
import { BUST_IMAGE_CACHE, buildSessionCache, isProd } from './lib'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

export type MacroClient = {
  /** Necessary for resolving relations (e.g. testimonials) */
  id: string
  name: string
  sort: number
  website: string
  avatar_url: string
  showOnAuditsPage: boolean
  showOnFellowshipPage: boolean
  social: {
    github: string | null
    twitter: string | null
    telegram: string | null
    farcaster: string | null
  }
}

const projectDir = path.resolve(process.cwd())
const dataDir = path.resolve(projectDir, '.next/cache/website-data')
const clientsDataFile = path.join(dataDir, 'clients.json')

export function getMacroClientsData() {
  if (!existsSync(clientsDataFile)) {
    throw new Error('Data file not found (macro-clients). Try running `npm run build:data`')
  }
  const data = readFileSync(clientsDataFile, 'utf-8')
  return JSON.parse(data) as MacroClient[]
}

// Import within to avoid backend code being bundled in the frontend
export async function buildMacroClientsData() {
  // Avoid building twice in one script
  if (buildSessionCache.macroClients) return
  buildSessionCache.macroClients = true

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const directory = await notion.databases.query({
    database_id: '150fcbe6fc2d40f094826205c3edbee5',
  })

  let clients = (directory.results as any[]).map((entry: any): MacroClient => {
    const name = entry.properties.Name.title[0].plain_text
    console.log('macro-client>', name)
    return {
      id: entry.id,
      name,
      sort: entry.properties.Sort.number,
      website: entry.properties.Website.url,
      showOnAuditsPage: entry.properties['Show on Audits Page'].checkbox,
      showOnFellowshipPage: entry.properties['Show on Fellowship Page'].checkbox,
      avatar_url: entry.properties.Avatar.files[0].file.url,
      social: {
        github: entry.properties.Github.url,
        twitter: entry.properties.Twitter.url,
        telegram: entry.properties.Telegram.url,
        farcaster: entry.properties.Farcaster.url,
      },
    }
  })

  console.log('Found ' + clients.length + ' clients')

  // Sort ascending
  clients.sort((a, b) => a.sort - b.sort)

  // File url from notion is temporary
  // Save to file system, but first clear out the directory
  const avatarDir = path.resolve(__dirname, '../../public/avatar/clients')
  if (BUST_IMAGE_CACHE && existsSync(avatarDir)) {
    await fs.rm(avatarDir, { recursive: true })
  }
  await fs.mkdir(avatarDir, { recursive: true })

  for (let client of clients) {
    // const avatar = await fetch(person.avatar_url)
    // const buffer = Buffer.from(await avatar.arrayBuffer())
    const ext = client.avatar_url.match(/(\.[a-z]+)\?/)?.[1]
    if (!ext) {
      throw new Error('No extension found for ' + client.avatar_url)
    }
    const filename = client.name.toLowerCase().replace(/\s/g, '-') + ext
    const dest = path.join(avatarDir, filename)

    if (isProd || !existsSync(dest)) {
      const stream = createWriteStream(dest)
      const { body } = await fetch(client.avatar_url)
      await finished(Readable.fromWeb(body as any).pipe(stream))
    }

    client.avatar_url = '/avatar/clients/' + filename
    console.log(dest.replace(projectDir + '/', ''))
  }

  // Write data file
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(clientsDataFile, JSON.stringify(clients, null, 2), 'utf-8')

  console.log(clientsDataFile.replace(projectDir + '/', ''))
}

if (require.main === module) {
  buildMacroClientsData()
}

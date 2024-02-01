import { Client } from '@notionhq/client'
import dotenv from 'dotenv'
import { createWriteStream, existsSync, promises as fs, readFileSync } from 'fs'
import path from 'path'
import { Readable } from 'stream'
import { finished } from 'stream/promises'
import { BUST_IMAGE_CACHE, isProd } from './lib'
import { MacroClient, buildMacroClientsData, getMacroClientsData } from './macro-clients'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

export type Testimonial = {
  id: string
  name: string
  sort: number
  quote: string
  title: String
  client: MacroClient
  avatar_url: string
  social_url: string | null
  showOnAuditsPage: boolean
}

const projectDir = path.resolve(process.cwd())
const dataDir = path.resolve(projectDir, '.next/cache/website-data')
const testimonialsDataFile = path.join(dataDir, 'testimonials.json')

export function getTestimonialsData() {
  if (!existsSync(testimonialsDataFile)) {
    console.log('bruh', testimonialsDataFile)
    throw new Error('Data file not found (testimonial). Try running `npm run build:data`')
  }
  const data = readFileSync(testimonialsDataFile, 'utf-8')
  return JSON.parse(data) as Testimonial[]
}

// Import within to avoid backend code being bundled in the frontend
export async function buildTestimonialsData() {
  await buildMacroClientsData()
  const macroClients = getMacroClientsData()

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const directory = await notion.databases.query({
    database_id: '32e1657113c240e1a1080581874b172d',
  })

  let testimonials = (directory.results as any[]).map((entry: any): Testimonial => {
    const name = entry.properties.Name.title[0].plain_text
    console.log('testimonial>', name)
    const client = macroClients.find((c) => c.id === entry.properties.Client.relation[0].id)
    if (!client) {
      throw new Error(`Macro Client not found for testimonial "${name}"`)
    }
    return {
      id: entry.id,
      name,
      sort: entry.properties.Sort.number,
      title: entry.properties.Title.rich_text[0].plain_text,
      quote: entry.properties.Quote.rich_text[0].plain_text,
      client,
      avatar_url: entry.properties.Avatar.files[0].file.url,
      social_url: entry.properties.Social.url,
      showOnAuditsPage: entry.properties['Show on Audits Page'].checkbox,
    }
  })

  console.log('Found ' + testimonials.length + ' testimonials')

  // Sort ascending
  testimonials.sort((a, b) => a.sort - b.sort)

  // File url from notion is temporary
  // Save to file system, but first clear out the directory
  const avatarDir = path.resolve(__dirname, '../../public/avatar/testimonials')
  if (BUST_IMAGE_CACHE && existsSync(avatarDir)) {
    await fs.rm(avatarDir, { recursive: true })
  }
  await fs.mkdir(avatarDir, { recursive: true })

  for (let person of testimonials) {
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

    person.avatar_url = '/avatar/testimonials/' + filename
    console.log(dest.replace(projectDir + '/', ''))
  }

  // Write data file
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(testimonialsDataFile, JSON.stringify(testimonials, null, 2), 'utf-8')

  console.log(testimonialsDataFile.replace(projectDir + '/', ''))
}

if (require.main === module) {
  buildTestimonialsData()
}

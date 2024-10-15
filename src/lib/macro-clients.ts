import { getCachedData } from '@/utils/cache'
import { Client } from '@notionhq/client'

export type MacroClient = {
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

export async function getMacroClientsData(): Promise<MacroClient[]> {
  return getCachedData('macroClientsData', async () => {
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

    return clients
  })
}

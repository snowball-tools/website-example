import { getCachedData } from '@/utils/cache'
import { Client } from '@notionhq/client'
import { MacroClient, getMacroClientsData } from './macro-clients'

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
  showOnFellowshipPage: boolean
}

export async function getTestimonialsData(): Promise<Testimonial[]> {
  return getCachedData('testimonialsData', async () => {
    const macroClients = await getMacroClientsData()

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
        showOnFellowshipPage: entry.properties['Show on Fellowship Page'].checkbox,
      }
    })

    console.log('Found ' + testimonials.length + ' testimonials')

    // Sort ascending
    testimonials.sort((a, b) => a.sort - b.sort)

    return testimonials
  })
}

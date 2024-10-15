import { getCachedData } from '@/utils/cache'
import { Client } from '@notionhq/client'

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

export async function getTeamData(): Promise<TeamMember[]> {
  return getCachedData('teamData', async () => {
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

    return people
  })
}

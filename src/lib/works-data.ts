import { getCachedData } from '@/utils/cache'

export type AuditWorkIssueSeverity = 'C' | 'H' | 'M' | 'L' | 'Q' | 'G' | 'I'
export type AuditWork = {
  title: string
  issues?: Record<AuditWorkIssueSeverity, number>
  subtitle: string
  date: string
  about: string
  reportUrl: string
  vendorLogoUrl: string
}

export async function getWorksData(): Promise<AuditWork[]> {
  return getCachedData('worksData', async () => {
    if (!process.env.AUDITS_ENDPOINT) {
      throw new Error('AUDITS_ENDPOINT environment variable is not set')
    }

    const response = await fetch(process.env.AUDITS_ENDPOINT)
    if (!response.ok) {
      throw new Error(`Failed to fetch works data: ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Fetched ' + data.length + ' works')
    return data as AuditWork[]
  })
}

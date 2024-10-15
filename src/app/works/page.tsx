import { AuditWork, getWorksData } from '@/lib/works-data'
import { GetServerSideProps } from 'next'
import WorksPageContent from './page-content'

export default async function WorksPage() {
  const works = await getWorksData()
  return <WorksPageContent works={works} />
}

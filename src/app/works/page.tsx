import { AuditWorkIssueSeverity, getWorksData } from '../../../scripts/build/works'
import WorksPageContent from './page-content'

export default function WorksPage() {
  const works = getWorksData()

  return <WorksPageContent works={works} />
}

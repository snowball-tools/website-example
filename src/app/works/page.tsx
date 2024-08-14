import Footer from '@/components/minimal/Footer'
import { AuditWorkIssueSeverity, getWorksData } from '../../../scripts/build/works'
import Header from '../../components/minimal/Header'

type Severity = AuditWorkIssueSeverity

export default function WorksPage() {
  const works = getWorksData()

  return (
    <div className="">
      <Header />

      <main className="Content mt-8">
        <h1 className="text-[1.3rem] font-semibold">Audit Works Library</h1>
        <p className="mt-2">
          A curated list of audits we have worked with in the past, presented here to the community.
        </p>

        <div className="mt-8 grid grid-flow-row xs:grid-cols-2 gap-6">
          {works.map((item, i) => {
            if (!item.issues) return null

            const impactfulCount =
              (item.issues.C || 0) +
              (item.issues.H || 0) +
              (item.issues.M || 0) +
              (item.issues.L || 0)

            const minorCount = (item.issues.Q || 0) + (item.issues.G || 0) + (item.issues.I || 0)

            const totalIssueCount = impactfulCount + minorCount
            if (totalIssueCount === 0) return null

            const minorP = minorCount / totalIssueCount
            const sections = [
              {
                severities: 'IGQ'.split('') as Severity[],
                count: minorCount,
                styles: {
                  width: minorP > 0.33 && impactfulCount >= 3 ? '33%' : `${minorP * 100}%`,
                },
              },
              {
                severities: 'LMHC'.split('') as Severity[],
                count: impactfulCount,
                styles: { flex: 1 },
              },
            ]

            return (
              <a
                href={item.reportUrl}
                target="_blank"
                className="group flex flex-col gap-2"
                key={i}
              >
                <div className="pl-1 flex items-center">
                  {item.vendorLogoUrl && (
                    <img src={item.vendorLogoUrl} alt={item.title} className="h-5 w-5 rounded-sm" />
                  )}

                  <div className="ml-3 flex-1 flex items-center font-semibold">
                    {/* <Link href={item.reportUrl} target="_blank" className="dark:text-white"> */}
                    {item.title}
                    {/* </Link> */}
                  </div>

                  <div className="text-neutral-400 dark:text-dusk-700/80 text-xs">
                    {totalIssueCount} issue{totalIssueCount !== 1 ? 's' : ''}
                  </div>
                </div>

                <div className="h-5">
                  {totalIssueCount === 0 && <div className="h-1 bg-neutral-50"></div>}
                  <div className="h-1 group-hover:h-5 flex items-stretch overflow-hidden transition-[height]">
                    {sections.map(({ severities, count, styles }, j) =>
                      count === 0 ? null : (
                        <div className="h-5 flex items-stretch" style={styles} key={j}>
                          {severities.map((severity) => {
                            const p = item.issues[severity] / count
                            return (
                              <div
                                key={severity}
                                className={`overflow-hidden flex-center ${
                                  // prettier-ignore
                                  severity === 'C' ? 'bg-gray-800 dark:bg-black text-white dark:text-white' + (p > 0.01 ? ' dark:border border-white' : '') :
                                severity === 'H' ? 'bg-red-400 dark:text-black' :
                                severity === 'M' ? 'bg-yellow-400 dark:text-black' :
                                severity === 'L' ? 'bg-yellow-200 dark:text-black' :
                                severity === 'Q' ? 'bg-blue-300 dark:text-black' :
                                'bg-gray-200 dark:text-black'
                                }`}
                                style={{
                                  width: `${p * 100}%`,
                                }}
                              ></div>
                            )
                          })}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}

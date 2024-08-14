import Footer from '@/components/minimal/Footer'
import { getWorksData } from '../../../scripts/build/works'
import Header from '../../components/minimal/Header'

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
            const totalIssueCount = Object.values(item.issues).reduce((acc, val) => acc + val, 0)
            if (totalIssueCount === 0) return null
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
                    {totalIssueCount} issues
                  </div>
                </div>

                <div className="h-5">
                  {totalIssueCount === 0 && <div className="h-1 bg-neutral-50"></div>}
                  {totalIssueCount > 0 && (
                    <div className="h-1 group-hover:h-5 flex items-stretch overflow-hidden transition-[height]">
                      {Object.entries(item.issues)
                        .reverse()
                        .map(([severity, count]) => {
                          const p = count / totalIssueCount
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
                  )}
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

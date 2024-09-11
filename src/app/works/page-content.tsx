'use client'

import { TextSwitch } from '@/components/TextSwitch'
import { ExternalLinkIcon } from '@/components/icons/ExternalIcon'
import Footer from '@/components/minimal/Footer'
import { prettySeverityName } from '@/utils/human'
import { objectEntries } from '@/utils/object-utils'
import { useState } from 'react'
import { AuditWork, AuditWorkIssueSeverity } from '../../../scripts/build/works'
import Header from '../../components/minimal/Header'

type Severity = AuditWorkIssueSeverity

type Props = {
  works: AuditWork[]
}
export default function WorksPageContent({ works }: Props) {
  const [detailed, setDetailed] = useState(false)

  return (
    <div className="">
      <Header />

      <main className="Content mt-8">
        <h1 className="text-[1.3rem] font-semibold">Audit Works Library</h1>
        <p className="mt-2">
          A curated list of audits we have worked with in the past, presented here to the community.
        </p>

        <div className="mt-4">
          <TextSwitch
            value={detailed}
            onChange={(v) => setDetailed(v)}
            offLabel="Summary"
            onLabel="Detailed"
            className="font-medium"
          />
        </div>

        <div
          className={`grid ${detailed ? 'mt-12 grid-cols-1 gap-16' : 'mt-8 xs:grid-cols-2 gap-6'}`}
        >
          {works.map((item, i) =>
            detailed ? (
              <DetailedWorkItem key={i} item={item} />
            ) : (
              <SummaryWorkItem key={i} item={item} />
            ),
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

const SummaryWorkItem = ({ item }: { item: AuditWork }) => {
  const issues = item.issues
  if (!issues) return null

  const impactfulCount = (issues.C || 0) + (issues.H || 0) + (issues.M || 0) + (issues.L || 0)

  const minorCount = (issues.Q || 0) + (issues.G || 0) + (issues.I || 0)

  const totalIssueCount = impactfulCount + minorCount
  if (totalIssueCount === 0) return null

  const minorP = minorCount / totalIssueCount
  const sections = [
    {
      severities: 'CHML'.split('') as Severity[],
      count: impactfulCount,
      styles: { flex: 1 },
    },
    {
      severities: 'QGI'.split('') as Severity[],
      count: minorCount,
      styles: {
        width: minorP > 0.33 && impactfulCount >= 3 ? '33%' : `${minorP * 100}%`,
      },
    },
  ]

  return (
    <a href={item.reportUrl} target="_blank" className="group flex flex-col gap-2">
      <div className="pl-1 flex items-center">
        {item.vendorLogoUrl && (
          <img src={item.vendorLogoUrl} alt={item.title} className="h-5 w-5 rounded-sm" />
        )}

        <div className="ml-3 flex-1 flex items-center font-semibold">{item.title}</div>

        <div className="text-neutral-400 dark:text-dusk-700/80 text-xs">
          {totalIssueCount} issue{totalIssueCount !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="h-5">
        {totalIssueCount === 0 && <div className="h-1 bg-neutral-50"></div>}
        <div className="h-1 group-hover:h-4 flex items-stretch overflow-hidden transition-[height]">
          {sections.map(({ severities, count, styles }, j) =>
            count === 0 ? null : (
              <div className="h-4 flex items-stretch" style={styles} key={j}>
                {severities.map((severity) => {
                  const p = issues[severity] / count
                  return (
                    <div
                      key={severity}
                      className={`overflow-hidden flex-center ${
                        // prettier-ignore
                        severity === 'C' ? 'bg-gray-800 dark:bg-black text-white dark:text-white' + (p > 0.01 ? ' dark:border border-white' : '') :
                        severity === 'H' ? 'bg-red-400 dark:bg-[#c2393f]' :
                        severity === 'M' ? 'bg-yellow-400 dark:bg-yellow-600' :
                        severity === 'L' ? 'bg-yellow-200 dark:bg-[#c6a530]' :
                        severity === 'Q' ? 'bg-blue-300 dark:bg-[#4075c4]' :
                        'bg-gray-200 dark:bg-gray-400'
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
}

const DetailedWorkItem = ({ item }: { item: AuditWork }) => {
  if (!item.issues) return null

  const totalIssueCount = Object.values(item.issues).reduce((acc, curr) => acc + (curr || 0), 0)

  if (totalIssueCount === 0) return null

  return (
    <div className="flex flex-col gap-3.5">
      <a href={item.reportUrl} target="_blank" className="group flex items-center gap-2.5">
        {item.vendorLogoUrl && (
          <img src={item.vendorLogoUrl} alt={item.title} className="h-7 w-7 rounded-md" />
        )}
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <ExternalLinkIcon className="h-4 text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <div className="flex-1"></div>
        <div className="text-sm font-medium">
          {totalIssueCount} issue{totalIssueCount !== 1 ? 's' : ''}
        </div>
      </a>

      <div className="flex justify-between">
        <div className="pr-2 text-sm text-neutral-700 dark:text-dusk-600 leading-tight">
          {item.subtitle}
        </div>
        <div className="pt-[1px] text-xs text-neutral-400 dark:text-dusk-700/80">
          {new Date(item.date).toLocaleDateString()}
        </div>
      </div>
      <div>
        <div className="h-5 flex items-stretch overflow-hidden rounded-sm">
          {objectEntries(item.issues).map(([severity, count]) => (
            <div
              key={severity}
              className={`overflow-hidden flex-center ${
                // prettier-ignore
                severity === 'C' ? 'bg-gray-800 dark:bg-black text-white' :
                severity === 'H' ? 'bg-red-400 dark:bg-[#c2393f]' :
                severity === 'M' ? 'bg-yellow-400 dark:bg-yellow-600' :
                severity === 'L' ? 'bg-yellow-200 dark:bg-[#c6a530]' :
                severity === 'Q' ? 'bg-blue-300 dark:bg-[#4075c4]' :
                'bg-gray-200 dark:bg-gray-400'
              }`}
              style={{
                width: `${((count || 0) / totalIssueCount) * 100}%`,
              }}
            >
              {count && count > 0 && (
                <span
                  className={`text-xs font-medium ${
                    severity === 'C' ? 'text-white/80' : 'text-neutral-900/30 dark:text-black/70'
                  }`}
                >
                  {prettySeverityName(severity)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      {item.about && (
        <div
          className="pt-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item.about }}
        ></div>
      )}
    </div>
  )
}

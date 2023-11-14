import Image from 'next/image'
import { BorderCard } from '../Card'
import { Report } from './DetailAuditReportsTab'

type AuditReportProps = {
  data: Report
}

const bgClassMap: Record<string, string> = {
  Critical: 'bg-critical',
  High: 'bg-high',
  Medium: 'bg-medium',
  Low: 'bg-low',
  'Code Quality': 'bg-codeQuality',
  'Gas Optimization': 'bg-gasOptimization',
}

const AuditReport = ({ data }: AuditReportProps) => {
  return (
    <BorderCard className="p-6 max-w-xl m-auto tex-left font-mono font-[300] sm:p-12">
      <Image
        src={`/clients/${data.client.toLowerCase()}.svg`}
        alt={`${data.client} Logo`}
        width={100}
        height={37}
        priority
      />

      <div className="mt-8">
        <h2 className="font-sans font-bold mb-3">Audit Report Release</h2>
        <p className="">{data.releaseDate}</p>
      </div>

      <div className="mt-5">
        <h2 className="font-sans font-bold mb-3">Description</h2>
        <p className="">{data.description}</p>
      </div>

      <div className="mt-5">
        <h2 className="font-sans font-bold mb-3">Overview of Findings</h2>
        <div className="flex flex-wrap">
          {data.findings.map((finding, index) => {
            return (
              <div key={index} className="flex w-full items-center h-10 sm:w-1/2 ">
                <p
                  className={`${
                    bgClassMap[finding.type]
                  } inline-block py-0.5 px-2 rounded-lg mr-2 text-white`}
                >
                  {finding.quantity}
                </p>
                <p className="">{finding.type}</p>
              </div>
            )
          })}
        </div>
      </div>
    </BorderCard>
  )
}

export default AuditReport

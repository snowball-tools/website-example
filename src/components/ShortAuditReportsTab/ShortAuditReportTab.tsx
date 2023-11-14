import { Tab } from '@headlessui/react'
import Image from 'next/image'
import ShortAuditReport from './ShortAuditReport'
import TabConnectors from './TabConnectors'

export type SummaryReport = {
  client: string
  reportName: string
  releaseDate: string
  version: string
  presentedBy: string
  reportUrl: string
}

const reports: SummaryReport[] = [
  {
    client: 'Connext',
    reportName: 'Connext A-1',
    releaseDate: 'January 31, 2023',
    version: '1.0.0',
    presentedBy: '0xMacro',
    reportUrl: 'https://0xmacro.com/library/audits/connext-1',
  },
  {
    client: 'mStable',
    reportName: 'mStable-A-1',
    releaseDate: 'January 11, 2023',
    version: '1.0.0',
    presentedBy: '0xMacro',
    reportUrl: 'https://0xmacro.com/library/audits/mstable-1',
  },
  {
    client: 'thirdweb',
    reportName: 'ThirdWeb-A-6',
    releaseDate: 'November 17, 2022',
    version: '1.0.0',
    presentedBy: '0xMacro',
    reportUrl: 'https://0xmacro.com/library/audits/thirdweb-6',
  },
]

const ShortAuditReportsTab = () => {
  return (
    <Tab.Group>
      <Tab.Panels className="mb-5 lg:mb-0">
        {reports.map((report, index) => {
          return (
            <Tab.Panel key={index} className="mt-10 lg:-mt-5">
              <ShortAuditReport data={report} />
            </Tab.Panel>
          )
        })}
      </Tab.Panels>

      <TabConnectors />

      <Tab.List className="w-full flex flex-wrap justify-center gap-2 mt-6 sm:mx-auto sm:gap-4 lg:relative lg:-top-[35px]">
        {reports.map((report, index) => {
          return (
            <Tab key={index} className="outline-none">
              {({ selected }) => (
                <div
                  className={`${
                    selected ? 'border-gray-400' : ''
                  } border py-3 px-2 rounded-xl bg-white sm:px-4 lg:px-6`}
                >
                  <Image
                    src={`/clients/${report.client.toLowerCase()}.svg`}
                    alt={`${report.client} Logo`}
                    width={70}
                    height={37}
                    priority
                  />
                </div>
              )}
            </Tab>
          )
        })}
      </Tab.List>
    </Tab.Group>
  )
}

export default ShortAuditReportsTab

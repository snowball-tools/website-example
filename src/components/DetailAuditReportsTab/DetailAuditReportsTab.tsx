'use client';

import { Tab } from '@headlessui/react';
import AuditReport from './AuditReport';
import Image from 'next/image';
import TabConnectors from './TabConnectors';

export type ReportFinding = {
  type: string;
  quantity: number;
};

export type Report = {
  client: string;
  releaseDate: string;
  description: string;
  findings: ReportFinding[];
};

const reports: Report[] = [
  {
    client: 'Maker',
    releaseDate: 'December 22, 2022',
    description: "Audited MakerDAO's permissionless token purchase and disposition module.",
    findings: [
      { type: 'Medium', quantity: 1 },
      { type: 'Code Quality', quantity: 7 },
      { type: 'Low', quantity: 2 },
    ],
  },
  {
    client: 'mStable',
    releaseDate: 'January 11, 2023',
    description: "Audited mStable's meta vaults contract based on EIP-4626.",
    findings: [
      { type: 'High', quantity: 2 },
      { type: 'Code Quality', quantity: 3 },
      { type: 'Medium', quantity: 4 },
      { type: 'Gas Optimization', quantity: 3 },
      { type: 'Low', quantity: 2 },
    ],
  },
  {
    client: 'Connext',
    releaseDate: 'January 31, 2023',
    description:
      "We audited Connext's messaging layer contracts, responsible for coordinating state updates between various Connext modules.",
    findings: [
      { type: 'Critical', quantity: 1 },
      { type: 'Low', quantity: 5 },
      { type: 'High', quantity: 4 },
      { type: 'Code Quality', quantity: 9 },
      { type: 'Medium', quantity: 4 },
      { type: 'Gas Optimization', quantity: 5 },
    ],
  },
  {
    client: 'thirdweb',
    releaseDate: 'June 30, 2023',
    description: 'We audited two contracts for ThirdWeb: Dynamic Drops and Loyalty Card.',
    findings: [
      { type: 'High', quantity: 1 },
      { type: 'Code Quality', quantity: 4 },
      { type: 'Medium', quantity: 1 },
    ],
  },
  {
    client: 'Sommelier',
    releaseDate: 'June 28, 2023',
    description: "We audited Sommelier's cellar contracts.",
    findings: [
      { type: 'Medium', quantity: 4 },
      { type: 'Code Quality', quantity: 3 },
      { type: 'Low', quantity: 1 },
      { type: 'Gas Optimization', quantity: 6 },
    ],
  },
];

const DetailAuditReportsTab = () => {
  return (
    <div className="mt-16 mb-16">
      <p className="text-center">
        Work with you soon-to-be <span className="gradient-text block sm:inline">favorite Auditors.</span>
      </p>

      <div className="mx-2 sm:mx-6 mt-16">
        <Tab.Group>
          <Tab.List className="w-full flex flex-wrap justify-center gap-2 sm:mx-auto sm:gap-10">
            {reports.map((report, index) => {
              return (
                <Tab key={index} className="outline-none">
                  {({ selected }) => (
                    <div
                      className={`${selected ? 'border-gray-400' : ''} border py-4 px-4 sm:px-7 xl:px-8 rounded-xl bg-white`}
                    >
                      <Image
                        src={`/clients/${report.client}.svg`}
                        alt={`${report.client} Logo`}
                        width={100}
                        height={37}
                        priority
                      />
                    </div>
                  )}
                </Tab>
              );
            })}
          </Tab.List>
          <TabConnectors />
          <Tab.Panels>
            {reports.map((report, index) => {
              return (
                <Tab.Panel key={index} className="mt-10 lg:-mt-5">
                  <AuditReport data={report} />
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DetailAuditReportsTab;

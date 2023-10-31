import Image from 'next/image';
import { Report } from './DetailAuditReportsTab';
import { BorderCard } from '../Card';
import style from './AuditReport.module.scss';

type AuditReportProps = {
  data: Report;
};

const bgClassMap: Record<string, string> = {
  Critical: 'critical',
  High: 'high',
  Medium: 'medium',
  Low: 'low',
  'Code Quality': 'code-quality',
  'Gas Optimization': 'gas-optimization',
};

const AuditReport = ({ data }: AuditReportProps) => {
  return (
    <BorderCard className="p-6 sm:p-12 max-w-xl m-auto tex-left font-mono font-[300]">
      <Image
        className={style['test']}
        src={`/clients/${data.client}.svg`}
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
              <div key={index} className="flex w-full sm:w-1/2 items-center h-10">
                <p className={`${style[bgClassMap[finding.type]]} inline-block py-0.5 px-2 rounded-lg mr-2 text-white`}>
                  {finding.quantity}
                </p>
                <p className="">{finding.type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </BorderCard>
  );
};

export default AuditReport;

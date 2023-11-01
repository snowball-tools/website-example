import { BorderCard } from '../Card';
import { SummaryReport } from './ShortAuditReportTab';
import { CtaExternalPage } from '../Cta';

type ShortAuditReportProps = {
  data: SummaryReport;
};

const ShortAuditReport = ({ data }: ShortAuditReportProps) => {
  return (
    <BorderCard className="p-6 max-w-[300px] m-auto tex-left font-mono font-[300] text-gray-600 sm:px-12 sm:py-8">
      <h1 className="font-bold mb-3 text-black">{data.reportName}</h1>
      <p>{data.releaseDate}</p>
      <p className="mb-5">Version {data.version}</p>
      <p className="mb-4">
        Presented by <span className="underline">{data.presentedBy}</span>
      </p>

      <CtaExternalPage href={data.reportUrl}>View Report</CtaExternalPage>
    </BorderCard>
  );
};

export default ShortAuditReport;

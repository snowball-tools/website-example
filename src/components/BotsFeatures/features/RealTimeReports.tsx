'use client';

import ShortAuditReportsTab from '@/components/ShortAuditReportsTab';

type RealTimeReportsProps = {
  className?: string;
};

const RealTimeReports = ({ className }: RealTimeReportsProps) => {
  return (
    <div className={className}>
      <ShortAuditReportsTab />
    </div>
  );
};

export default RealTimeReports;

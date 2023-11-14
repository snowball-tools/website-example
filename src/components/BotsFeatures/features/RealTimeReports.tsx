'use client'

import ShortAuditReportsTab from '@/components/ShortAuditReportsTab'
import Image from 'next/image'

type RealTimeReportsProps = {
  className?: string
}

const RealTimeReports = ({ className }: RealTimeReportsProps) => {
  return (
    <div className={className}>
      <div
        className=""
        style={{
          background: 'linear-gradient(180deg, #3E3E3E 0%, #262626 100%)',
          borderRadius: '0.82469rem 0.82469rem 0rem 0rem',
        }}
      >
        <Image src="/img/sample-report.png" alt="Sample Report" width={884} height={899} />
      </div>
    </div>
  )
}

export default RealTimeReports

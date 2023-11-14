import FeatureCard from './FeatureCard'
import NewDetectors from './features/NewDetectors'
import ProprietaryDetectors from './features/ProprietaryDetectors'
import RealTimeReports from './features/RealTimeReports'
import VerifiedByAuthor from './features/VerifiedByAuthor'

const BotsFeatures = () => {
  return (
    <div className="my-12 mx-2 gap-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-4 sm:mb-0 sm:mt-20 lg:max-w-4xl lg:mx-auto">
      <FeatureCard
        icon="/icons/search.svg"
        title="300+ Proprietary Detectors"
        description="Detecting critical, high, medium, low, code quality, and gas optimizations."
        collapse
      >
        <ProprietaryDetectors className="mb-10" />
      </FeatureCard>
      <FeatureCard
        icon="/icons/zap.svg"
        title="Real Time Reports"
        description="Audit reports are generated and delivered in real-time."
        collapse
      >
        <RealTimeReports className="mx-6 sm:mx-8" />
      </FeatureCard>
      <FeatureCard
        icon="/icons/calendar.svg"
        title="New Detectors Deployed Weekly"
        description="Stay protected against the latest threats."
        collapse
      >
        <NewDetectors className="px-4 mx-auto w-full max-w-[360px]" />
      </FeatureCard>
      <FeatureCard
        icon="/icons/verified-badge.svg"
        title="Crit and High Vulns Verified by Auditors"
        description="Get high signal, low noise with every report."
        collapse
      >
        <VerifiedByAuthor className="pb-4" />
      </FeatureCard>
    </div>
  )
}

export default BotsFeatures

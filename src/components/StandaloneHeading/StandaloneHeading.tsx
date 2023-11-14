type StandaloneHeadingProps = {
  children: React.ReactNode
}

const StandaloneHeading = ({ children }: StandaloneHeadingProps) => {
  return (
    <section className="max-w-sm mx-auto text-center text-gray-500">
      <h1 className="text-3xl mb-16 font-mono sm:text-4xl sm:leading-normal">{children}</h1>
    </section>
  )
}

export default StandaloneHeading

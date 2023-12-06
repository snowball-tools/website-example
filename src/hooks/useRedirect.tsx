import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const useRedirect = (redirectUrl: string) => {
  const [isRedirecting, setIsRedirecting] = useState(true)
  const router = useRouter()

  useEffect(() => {
    router.push(redirectUrl)
    // Delay rendering the page content until after the redirect attempt
    const timer = setTimeout(() => {
      setIsRedirecting(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [router, redirectUrl])

  if (isRedirecting) {
    return null // or a loading spinner
  }
}

export default useRedirect

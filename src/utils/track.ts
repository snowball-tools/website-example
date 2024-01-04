import Router from 'next/router'
import { MouseEvent as ReactMouseEvent } from 'react'

/**
 * Limitations (from https://umami.is/docs/tracker-functions):
 * Numbers have a max precision of 4.
 * Strings have a max length of 500.
 * Arrays are converted to a String, with the same max length of 500.
 * Objects have a max of 50 properties. Arrays are considered 1 property
 */
export async function trackEvent(event: string, data?: Record<string, any>) {
  const umami = (window as any).umami
  if (!umami) return
  await umami.track(event, data)
}

/**
 * Next.js is annoying because it doesn't allow you to easily override
 * the onclick handler for Link components. This is a workaround.
 */
export const trackOnClick =
  (data?: Record<string, any>) => async (e: ReactMouseEvent<HTMLElement, MouseEvent>) => {
    // Prevent default navigation behavior
    e.preventDefault()

    // NEED TO DO THIS HERE APPARENTLY OR ELSE CURRENT TARGET BECOMES NULL AFTER AWAIT
    const href = e.currentTarget.getAttribute('href')!

    // Track before navigation
    await trackEvent(e.currentTarget.innerText, data)

    if (href) {
      // May not be present for e.g. buttons
      window.location.href = href
    }
  }

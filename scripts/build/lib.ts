export const isProd = process.env.NODE_ENV === 'production'
export const BUST_IMAGE_CACHE = !!process.env.BUST_IMAGE_CACHE
export const buildSessionCache = {} as Record<string, any>

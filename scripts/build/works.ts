import dotenv from 'dotenv'
import { existsSync, promises as fs, readFileSync } from 'fs'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

export type AuditWorkIssueSeverity = 'C' | 'H' | 'M' | 'L' | 'Q' | 'G' | 'I'
export type AuditWork = {
  title: string
  issues?: Record<AuditWorkIssueSeverity, number>
  subtitle: string
  date: string
  about: string
  reportUrl: string
  vendorLogoUrl: string
}

const projectDir = path.resolve(process.cwd())
const dataDir = path.resolve(projectDir, '.next/cache/website-data')
const dataFile = path.join(dataDir, 'works.json')

export function getWorksData() {
  if (!existsSync(dataFile)) {
    throw new Error('Data file not found (blogs). Try running `npm run build:data`')
  }
  const data = readFileSync(dataFile, 'utf-8')
  return JSON.parse(data) as AuditWork[]
}

export async function buildWorksData() {
  console.log('Building works data...')
  const res = await (await fetch(process.env.AUDITS_ENDPOINT!)).json()
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(dataFile, JSON.stringify(res, null, 2))
}

if (require.main === module) {
  buildWorksData()
}

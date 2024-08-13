import { buildBlogData } from './blog-data'
import { buildMacroClientsData } from './macro-clients'
import { buildTeamData } from './team-data'
import { buildTestimonialsData } from './testimonials'
import { buildWorksData } from './works'

async function buildAll() {
  await buildTeamData()
  await buildBlogData()
  await buildMacroClientsData()
  await buildTestimonialsData()
  await buildWorksData()
}

if (require.main === module) {
  buildAll()
}

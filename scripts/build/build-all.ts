import { buildBlogData } from './blog-data'
import { buildMacroClientsData } from './macro-clients'
import { buildTeamData } from './team-data'
import { buildTestimonialsData } from './testimonials'

async function buildAll() {
  await buildTeamData()
  await buildBlogData()
  await buildMacroClientsData()
  await buildTestimonialsData()
}

if (require.main === module) {
  buildAll()
}

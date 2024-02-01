import GhostContentAPI from '@tryghost/content-api'
import dotenv from 'dotenv'
import { existsSync, promises as fs, readFileSync } from 'fs'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

export type Author = {
  id: string
  name: string
  slug: string
  profile_image: string
  cover_image: string | null
  bio: string | null
  website: string | null
  location: string | null
  facebook: string | null
  twitter: string | null
  meta_title: string | null
  meta_description: string | null
  url: string
}

export type Tag = {
  id: string
  name: string
  slug: string
  description: string | null
  feature_image: string | null
  visibility: 'public' | 'private'
  og_image: string | null
  og_title: string | null
  og_description: string | null
  twitter_image: string | null
  twitter_title: string | null
  twitter_description: string | null
  meta_title: string | null
  meta_description: string | null
  codeinjection_head: string | null
  codeinjection_foot: string | null
  canonical_url: string | null
  accent_color: string | null
  url: string
}

export type BlogPost = {
  id: string
  uuid: string
  title: string
  slug: string
  html: string
  comment_id: string
  tags: Tag[]
  authors: Author[]
  primary_tag: Tag | null
  primary_author: Author
  feature_image: string
  featured: boolean
  visibility: 'public' | 'private' // Assuming visibility is either 'public' or 'private'
  /** ISO date string format */
  created_at: string
  /** ISO date string format */
  updated_at: string
  /** ISO date string format */
  published_at: string
  custom_excerpt: string | null
  codeinjection_head: string | null
  codeinjection_foot: string | null
  custom_template: string | null
  canonical_url: string | null
  url: string
  excerpt: string
  reading_time: number
  access: boolean
  comments: boolean
  og_image: string | null
  og_title: string | null
  og_description: string | null
  twitter_image: string | null
  twitter_title: string | null
  twitter_description: string | null
  meta_title: string | null
  meta_description: string | null
  email_subject: string | null
  frontmatter: string | null
  feature_image_alt: string | null
  feature_image_caption: string | null
}

const projectDir = path.resolve(process.cwd())
const dataDir = path.resolve(projectDir, '.next/cache/website-data')
const blogDataFile = path.join(dataDir, 'blog.json')

export function getBlogData() {
  if (!existsSync(blogDataFile)) {
    throw new Error('Data file not found (blogs). Try running `npm run build:data`')
  }
  const data = readFileSync(blogDataFile, 'utf-8')
  return JSON.parse(data) as BlogPost[]
}

export async function buildBlogData() {
  const api = new GhostContentAPI({
    url: 'https://blog.0xmacro.com/blog',
    key: process.env.GHOST_KEY!,
    version: 'v5.0',
  })

  let posts: BlogPost[] = (await api.posts.browse({
    include: ['tags', 'authors'],
    limit: 'all',
  })) as any

  posts = posts.filter(
    (post) =>
      post.visibility === 'public' && post.published_at && new Date(post.published_at) < new Date(),
  )

  // Sort by published date descending
  posts = posts.sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  )

  for (const post of posts) {
    // post.html = post.html.replace(/<img src="\/content\/images/g, '<img src="/blog/content/images')
    console.log('post>', post.title)
  }

  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(blogDataFile, JSON.stringify(posts, null, 2), 'utf-8')

  console.log(blogDataFile.replace(projectDir + '/', ''))
}

if (require.main === module) {
  buildBlogData()
}

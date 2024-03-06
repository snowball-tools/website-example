import { RequestAuditSticky } from '@/app/audits/RequestAuditSticky'
import Footer from '@/components/minimal/Footer'
import { format } from 'fecha'
import { getBlogData } from '../../../../scripts/build/blog-data'
import { getTeamData } from '../../../../scripts/build/team-data'
import Header from '../../../components/minimal/Header'

// This function gets called at build time
export async function generateStaticParams() {
  const posts = getBlogData()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const team = getTeamData()
  const posts = getBlogData()
  const post = posts.find((p) => p.slug === params.slug)!

  const authors = post.authors.map(
    (author) => team.find((member) => member.name === author.name) || author.name,
  )

  return (
    <div className="">
      <Header />

      <main className="Content --wide mt-4">
        <h1 className="text-xl xs:text-3xl font-semibold">{post.title}</h1>
        <div className="mt-3 font-mono text-sm text-neutral-400 font-bold">
          {format(new Date(post.published_at), 'MMM D, YYYY')}
        </div>
        <div className="mt-6 flex flex-col xs:flex-row gap-6">
          {authors.map((author) => (
            <div
              className="flex items-center font-ui"
              key={typeof author === 'string' ? author : author.name}
            >
              <img
                src={typeof author === 'string' ? '/img/logo-avatar.png' : author.avatar_url}
                alt="Author avatar"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2 leading-none">
                <div className="font-bold">{typeof author === 'string' ? author : author.name}</div>
                <div className="text-sm">
                  {typeof author === 'string' ? 'Team member' : author.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="mt-6 dark:border-dusk-900/50" />

        <div
          className="GhostContent prose dark:prose-invert mt-6 max-w-none break-words"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </main>
      <Footer />
      <RequestAuditSticky formId={process.env.TYPEFORM_FORM_ID!} />
    </div>
  )
}

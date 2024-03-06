import Footer from '@/components/minimal/Footer'
import { format } from 'fecha'
import Link from 'next/link'
import { getBlogData } from '../../../scripts/build/blog-data'
import Header from '../../components/minimal/Header'
import { RequestAuditSticky } from '../audits/RequestAuditSticky'

export default function WritingPage() {
  const posts = getBlogData()

  return (
    <div className="">
      <Header />

      <main className="Content mt-8">
        <div className="flex flex-col gap-6">
          {posts.map((post) => {
            return (
              <div className="flex items-start" key={post.slug}>
                <div className="px-3 py-2 flex flex-col items-center justify-center -bold font-ui dark:text-night-400/80 bg-neutral-100/50 dark:bg-night-700 rounded">
                  <span className="text-xs leading-none font-mono">
                    {format(new Date(post.published_at), 'MMM').toUpperCase()}
                  </span>
                  <span className="text-lg leading-none relative left-[-1px]">
                    &apos;{format(new Date(post.published_at), 'YY')}
                  </span>
                </div>
                <div className="ml-3.5 flex-1">
                  <div className="flex items-center font-semibold">
                    <Link href={`/writing/${post.slug}`} className="dark:text-white">
                      {post.title}
                    </Link>
                  </div>
                  <div className="text-sm dark:text-dusk-500">
                    {post.authors.map((a) => a.name).join(', ')}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      <Footer />
      <RequestAuditSticky formId={process.env.TYPEFORM_FORM_ID!} />
    </div>
  )
}

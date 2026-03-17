import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPost } from '@/lib/posts'
import { businesses } from '@/lib/businesses'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => {
    const parts = slug.split('/')
    return { biz: parts[0], file: parts[1] }
  })
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.biz, params.file)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.biz, params.file)
  if (!post) notFound()

  const biz = businesses[post.business] || businesses[params.biz]
  if (!biz) notFound()

  const dateFormatted = new Date(post.date).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  })

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="site-logo">
            Industry Insights <span>India</span>
          </Link>
        </div>
      </header>

      <main>
        <article className="article-wrap">
          <Link href="/" className="article-back">← All articles</Link>

          <header className="article-header">
            <div className="article-business-badge" style={{ background: biz.bg, color: biz.color }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: biz.color, display: 'inline-block' }} />
              <a href={biz.url} target="_blank" rel="noopener noreferrer" style={{ color: biz.color }}>{biz.name}</a>
              <span style={{ color: 'var(--ink-4)' }}>·</span>
              <span style={{ color: biz.accent }}>{biz.label}</span>
            </div>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">
              <span>{dateFormatted}</span>
              <span className="article-meta-sep">|</span>
              <span>Week {post.week}</span>
              {post.tags.length > 0 && (
                <>
                  <span className="article-meta-sep">|</span>
                  <div className="post-card-tags">
                    {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </>
              )}
            </div>
          </header>

          <hr className="article-divider" />

          <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="article-cta" style={{ background: biz.bg, borderColor: biz.color + '33' }}>
            <p className="article-cta-label">About the author</p>
            <h3 style={{ color: biz.color }}>{biz.name}</h3>
            <p>{biz.description}</p>
            <a href={biz.url} target="_blank" rel="noopener noreferrer" style={{ background: biz.color }}>
              Visit {biz.name} →
            </a>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <Link href="/">← Back to all articles</Link>
          <a href={biz.url} target="_blank" rel="noopener noreferrer">{biz.url.replace('https://www.', '')}</a>
        </div>
      </footer>
    </>
  )
}

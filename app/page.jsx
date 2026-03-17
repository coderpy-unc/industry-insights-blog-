import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { businesses } from '@/lib/businesses'

export default function Home({ searchParams }) {
  const allPosts = getAllPosts()
  const activeFilter = searchParams?.business || 'all'
  const filtered = activeFilter === 'all'
    ? allPosts
    : allPosts.filter(p => p.business === activeFilter)

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="site-logo">
            Industry Insights <span>India</span>
          </Link>
        </div>
      </header>

      <section className="hero">
        <p className="hero-eyebrow">Independent technical articles · 6 businesses · India & Singapore</p>
        <h1>Expert insights from <em>leading</em> Indian businesses</h1>
        <p className="hero-desc">
          Insulation, EV technology, battery management, robotics, semiconductor components and autonomous power systems — one post per business, every week.
        </p>
      </section>

      <nav className="filter-bar">
        <div className="filter-bar-inner">
          <Link href="/">
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}>
              All articles
            </button>
          </Link>
          {Object.keys(businesses).map(key => (
            <Link key={key} href={`/?business=${key}`}>
              <button
                className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
                style={activeFilter === key ? { borderBottomColor: businesses[key].color, color: businesses[key].color } : {}}
              >
                {businesses[key].name}
              </button>
            </Link>
          ))}
        </div>
      </nav>

      <main className="main-wrap">
        <div className="posts-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <h3>Posts coming soon</h3>
              <p>Week 1 articles will appear here shortly.</p>
            </div>
          ) : (
            filtered.map(post => {
              const biz = businesses[post.business]
              if (!biz) return null
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="post-card">
                    <div className="post-card-business" style={{ color: biz.color }}>
                      <span className="post-card-dot" style={{ background: biz.color }} />
                      {biz.name} · {biz.label}
                    </div>
                    <h2>{post.title}</h2>
                    {post.excerpt && <p className="post-card-excerpt">{post.excerpt}</p>}
                    <div className="post-card-meta">
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <div className="post-card-tags">
                        {post.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })
          )}
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>© {new Date().getFullYear()} Industry Insights India. Independent articles from independent businesses.</span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {Object.keys(businesses).map(key => (
              <a key={key} href={businesses[key].url} target="_blank" rel="noopener noreferrer">
                {businesses[key].name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

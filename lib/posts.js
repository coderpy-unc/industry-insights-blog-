import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/posts')

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return []
  const posts = []
  const bizDirs = fs.readdirSync(postsDir).filter(f =>
    fs.statSync(path.join(postsDir, f)).isDirectory()
  )
  for (const biz of bizDirs) {
    const bizPath = path.join(postsDir, biz)
    const files = fs.readdirSync(bizPath).filter(f => f.endsWith('.md'))
    for (const file of files) {
      const slug = `${biz}/${file.replace(/\.md$/, '')}`
      const raw = fs.readFileSync(path.join(bizPath, file), 'utf8')
      const { data } = matter(raw)
      posts.push({
        slug,
        title: data.title || '',
        date: data.date || '',
        business: data.business || biz,
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        week: data.week || 0,
      })
    }
  }
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllSlugs() {
  if (!fs.existsSync(postsDir)) return []
  const slugs = []
  const bizDirs = fs.readdirSync(postsDir).filter(f =>
    fs.statSync(path.join(postsDir, f)).isDirectory()
  )
  for (const biz of bizDirs) {
    const bizPath = path.join(postsDir, biz)
    const files = fs.readdirSync(bizPath).filter(f => f.endsWith('.md'))
    for (const file of files) {
      slugs.push(`${biz}/${file.replace(/\.md$/, '')}`)
    }
  }
  return slugs
}

export async function getPost(bizSlug, fileSlug) {
  const filePath = path.join(postsDir, bizSlug, `${fileSlug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  return {
    slug: `${bizSlug}/${fileSlug}`,
    title: data.title || '',
    date: data.date || '',
    business: data.business || bizSlug,
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    week: data.week || 0,
    content: processed.toString(),
  }
}

import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import stringify from 'remark-stringify'
import recommended from 'remark-preset-lint-recommended'
import frontmatter from 'remark-frontmatter'
import extractor from 'remark-extract-frontmatter'

const yaml = require('yaml').parse

export function getSortedData(p) {
  const postsDirectory = path.join(process.cwd(), p)
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const res = remark()
          .use(recommended)
          .use(html)
          .use(frontmatter)
          .use(extractor, { yaml: yaml })
          .processSync(fileContents)
    const date = res.data.date ? (new Date(res.data.date)) : (new Date())
    // Combine the data with the id
    return {
      id,
      html: { __html: String(res)},
      dateString: date.toDateString(),
      ...res.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
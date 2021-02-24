import fs from 'fs'
import path from 'path'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remark2react from 'remark-react'
import matter from 'gray-matter'

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
    const { data, content } = matter(fileContents)
    // const res = remark()
    //       .use(recommended)
    //       .use(remark2react)
    //       .use(frontmatter)
    //       .use(extractor, { yaml: yaml })
    //       .processSync(fileContents)
    const date = data.date ? (new Date(data.date)) : (new Date())
    // Combine the data with the id
    return {
      id,
      // html: { __html: String(res)},
      // component: res.result,
      content: content,
      dateString: date.toDateString(),
      ...data
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
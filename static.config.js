import path from 'path'
import fs from 'fs-extra'
import remark from 'remark'
import html from 'remark-html'
import stringify from 'remark-stringify'
import recommended from 'remark-preset-lint-recommended'
import frontmatter from 'remark-frontmatter'
import extractor from 'remark-extract-frontmatter'
import { rebuildRoutes } from 'react-static/node'
import chokidar from 'chokidar'
// import { parse } from 'yaml'
const yaml = require('yaml').parse

let canRebuild = false;
// If we set up directory-watching outside of dev, we'll freeze at the end of every build
if (process.env.NODE_ENV === 'development') {
  chokidar.watch('./posts').on('all', () =>{if(canRebuild){rebuildRoutes()}})
  chokidar.watch('./projects').on('all', () =>{if(canRebuild){rebuildRoutes()}})
}

// Used to process a directory full of markdown files
async function procPosts(postdir, rootpath='/blog', postpath='/post', template='src/containers/Post', sort_date=true) {
  const posts = await fs.readdir(postdir)
  let post_data = posts.map(post => {
    const raw = fs.readFileSync(path.join(postdir, post), "utf-8")
    const res = remark()
          .use(recommended)
          .use(html)
          .use(frontmatter)
          .use(extractor, { yaml: yaml })
          .processSync(raw)
    return {
      fname: post,
      data: res.data,
      md: String(res),
      stripped: path.parse(post).name
    }
  })
  if(sort_date){
    post_data = post_data.sort((a,b) => (new Date(b.data.date)-new Date(a.data.date)))
  }
  const routeData = {
    path: rootpath,
    getData: () => ({ posts:post_data }),
    children: post_data.map(post => {
      return {
        path: postpath+`/${post.stripped}`,
        template: template,
        getData: async () => {
          return {
            html: {__html: String(post.md)},
            post: post
          }
        }
      }
    })
  }
  return routeData
}

export default {
  getRoutes: async () => {
    const postRoutes = await procPosts('./posts')
    const projectRoutes = await procPosts('./projects', '/', '/project', 'src/containers/Project')
    canRebuild = true
    return [
      postRoutes,
      projectRoutes
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-sass')
  ],
}
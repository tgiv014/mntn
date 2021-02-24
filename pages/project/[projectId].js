import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript';
import rust from 'highlight.js/lib/languages/rust';
import go from 'highlight.js/lib/languages/go';
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('go', go)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)

import { getSortedData } from '../../lib/markdowndir'

const allPostsData = getSortedData('./projects')

export async function getStaticProps() {
  return {
    props: {
      allPostsData
    }
  }
}

export async function getStaticPaths() {
  return {
    paths:
      allPostsData.map((project) => {
        return {
          params: { projectId: project.id }
        }
      }),
    fallback: false // See the "fallback" section below
  };
}

const Post = ({ allPostsData }) => {
  const router = useRouter()
  const { projectId } = router.query
  var postData = allPostsData.find(project => {
    return project.id === projectId
  })

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  })

  return (
    <div>
      <Head>
        <title>mntn.dev - {postData.title}</title>
      </Head>
      <div className="backline">
        <Link href="/">
          <a>
            <h1>{'<'}</h1>
          </a>
        </Link>
        <h1>{postData.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={postData.html} />
      <br />
    </div>
  )
}

export default Post
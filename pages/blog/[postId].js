import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Markdown from '../../components/Markdown';

import { getSortedData } from '../../lib/markdowndir'
const allPostsData = getSortedData('./posts')
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
      allPostsData.map((post) => {
        return {
          params: { postId: post.id }
        }
      }),
    fallback: false
  };
}

const Post = ({ allPostsData }) => {
  const router = useRouter()
  const { postId } = router.query
  var postData = allPostsData.find(post => {
    return post.id === postId
  })

  return (
    <div>
      <Head>
        <title>mntn.dev - {postData.title}</title>
      </Head>
      <div className="backline">
        <Link href="/blog">
          <a>
            <h1>{'<'}</h1>
          </a>
        </Link>
        <h1>{postData.title}</h1>
      </div>
      <br />
      <em>{postData.dateString}</em>
      <Markdown markdown={postData.content} />
      <br />
    </div>
  )
}

export default Post
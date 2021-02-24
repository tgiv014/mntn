import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Markdown from '../../components/Markdown';
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
    fallback: false
  };
}

const Post = ({ allPostsData }) => {
  const router = useRouter()
  const { projectId } = router.query
  var postData = allPostsData.find(project => {
    return project.id === projectId
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
      <Markdown markdown={postData.content} />
      <br />
    </div>
  )
}

export default Post
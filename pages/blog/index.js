import Head from 'next/head'
import Link from 'next/link'

import { getSortedData } from '../../lib/markdowndir'

export async function getStaticProps() {
  const allPostsData = getSortedData('./posts')
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>mntn.dev - Blog</title>
      </Head>
      <h1>Blog</h1>
      <br />
      <ul className="dotless-list">
        {allPostsData.map(post => {
          const d = new Date(post.date)
          return (
            <li key={post.id}>
              <h2>
                <Link
                  href={{
                    pathname: '/blog/[postId]',
                    query: { postId: post.id },
                  }}
                >
                  <a>{post.title}</a>
                </Link>
              </h2>
              <em>{post.dateString}</em> 
            </li>
          )
        })}
      </ul>
    </div>
  )
}

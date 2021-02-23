import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <div>
      <h1>Blog</h1>
      <br />
      <ul className="dotless-list">
        {posts.map(post => {
          const d  = new Date(post.data.date)
          return (
            <li key={post.id}>
              <h2>
                <Link to={`/blog/post/${post.stripped}/`}>{post.data.title}</Link>
              </h2>
              <em>{post.dateString}</em> 
            </li>
          )
        })}
      </ul>
    </div>
  )
}

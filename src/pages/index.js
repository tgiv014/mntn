import React from 'react'
import { useRouteData } from 'react-static'
import ProjectTile from '../components/ProjectTile'

export default () => {
  const { posts } = useRouteData()
  return (
    <div>
      <h1>Featured Projects</h1>
      <div className="project-grid">
        {posts.map(post => {
          if (post.data.featured){
            return (
              <ProjectTile
              title={post.data.title}
              description={post.data.description}
              to={`/project/${post.stripped}/`}
              bg={post.data.bg}
              bg_color={post.data.color}
            />
            )
          }else{
            return null
          }
        })}
      </div>
    </div>
  )
}

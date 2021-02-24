import Head from 'next/head'
import Link from 'next/link'
import ProjectTile from '../components/ProjectTile'
import { getSortedData } from '../lib/markdowndir'

export async function getStaticProps() {
  const allPostsData = getSortedData('./projects')
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
        <title>mntn.dev - Projects</title>
      </Head>
      <h1>Featured Projects</h1>
      <div className="project-grid">
        {allPostsData.map(project => {
          if (project.featured) {
            return (
              <Link
                href={{
                  pathname: '/project/[projectId]',
                  query: { projectId: project.id },
                }}
              >
                <a>
                  <ProjectTile
                    title={project.title}
                    description={project.description}
                    to={`/project/${project.id}/`}
                    bg={project.bg}
                    bg_color={project.color}
                  />
                </a>
              </Link>
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

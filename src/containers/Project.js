import React, { useEffect } from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript';
import rust from 'highlight.js/lib/languages/rust';
import go from 'highlight.js/lib/languages/go';
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import GitHub from 'components/GitHub';

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('go', go)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('python', python)
// import './monokai.css'

export default function Project() {
  const { post, html } = useRouteData()

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  })
  const github_panel = post.data.github ? (
    <GitHub repos={post.data.github} />
  ) : null;

  return (
    <div>
      <div className="backline">
        <Link to="/"><h1>{'<'}</h1></Link>
        <h1>{post.data.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={ html } />
      {github_panel}
    </div>
  )
}

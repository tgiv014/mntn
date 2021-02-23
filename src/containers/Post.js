import React, { useEffect } from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
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
// import './monokai.css'

export default function Post() {
  const { post, html } = useRouteData()

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  })
  return (
    <div>
      <div className="backline">
        <Link to="/blog/"><h1>{'<'}</h1></Link>
        <h1>{post.data.title}</h1>
      </div>
      <br />
      <em>{post.dateString}</em>
      <div dangerouslySetInnerHTML={ html } />
      <br />
    </div>
  )
}

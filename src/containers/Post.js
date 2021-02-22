import React, { useEffect } from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript';
import rust from 'highlight.js/lib/languages/rust';
import go from 'highlight.js/lib/languages/go';
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('go', go)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('python', python)
// import './monokai.css'

export default function Post() {
  const data = useRouteData()

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  })
  const d = new Date(data.post.data.date)
  return (
    <div>
      <div className="backline">
        <Link to="/blog/"><h1>{'<'}</h1></Link>
        <h1>{data.post.data.title}</h1>
      </div>
      <br />
      <em>{d.toDateString()}</em>
      <div dangerouslySetInnerHTML={ data.html } />
      <br />
    </div>
  )
}

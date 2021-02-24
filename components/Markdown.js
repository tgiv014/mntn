import React, { useEffect } from 'react'
import Link from 'next/link'

import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remark2react from 'remark-react'
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

function Image({src}) {
    return (
        <center>
            <img src={src} />
        </center>
    )
}

function MdLink({ children, href }) {
    return href.startsWith('/') || href === '' ? (
        <Link href={href}>
          <a>
            {children}
          </a>
        </Link>
      ) : (
        <a
          href={href}
        >
          {children}
        </a>
      );
}

export default (props) => {
    const res = remark()
        .use(recommended)
        .use(remark2react, {
            remarkReactComponents: {
                img: Image,
                a: MdLink
            }
        })
        .processSync(props.markdown)

    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    })
    return (
        <div className="markdown-container">
            {res.result}
        </div>
    )
}

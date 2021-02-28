import React, { useEffect } from 'react'
import Link from 'next/link'

import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';

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

let processor = unified()
        .use(markdown)
        .use(remark2rehype)
        .use(highlight)
        .use(rehype2react,
            {
                createElement: React.createElement,
                components: {
                    a: MdLink,
                    img: Image
                }
            })

export default (props) => {
    return (
        <div className="markdown-container">
            {processor.processSync(props.markdown).result}
        </div>
    )
}

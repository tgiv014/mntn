import Head from 'next/head'
import React from 'react'

export default () => (
    <div>
        <Head>
            <title>mntn.dev - Colophon</title>
        </Head>
        <h1>Colophon</h1>
        <p>
            Made in 2021 by Thomas Gorham and obsessively tweaked since.
    </p>
        <p>
            Source code for this site can be found <a href="https://github.com/tgiv014/mntn">here</a>.
    </p>
        <p>This website is built with:</p>
        <ul>
            <li><a href="https://github.com/vercel/next.js/">next.js</a> for development and static generation</li>
            <li><a href="https://github.com/remarkjs/remark">remark</a> for markdown processing</li>
            <li><a href="https://highlightjs.org/">highlight.js</a> for syntax highlighting</li>
        </ul>
    </div>
)

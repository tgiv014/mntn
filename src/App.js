import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'

import './style.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root className="asd">
      <nav>
        <div className="wrapper">
          <div className="header-wrapper">
            <div className="header-col">
              <Link to="/">
                <svg className="logo-container" viewBox="0 0 12.4355 5.8209889">
                  <g transform="translate(-1.0582919,-1.0582557)">
                  <path className="logo" d="m 1.9843752,5.953161 3.96875,-3.9688494 2.6458334,2.6458994 1.3229163,-1.32295 2.6458331,2.6459" id="path862" />
                  </g>
                </svg>
                </Link>
            </div>
            <div className="header-col">
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="content">
        <div className="wrapper">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
        </div>
      </div>
      <footer>
        <div className="wrapper">
          <div className="footer-wrapper">
            <div className="footer-col">
              <ul className="dotless-list">
                <li>mntn.dev</li>
                <li>© Thomas Gorham 2021</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul className="dotless-list">
                <li><Link to="/colophon">Colophon</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Root>
  )
}

export default App

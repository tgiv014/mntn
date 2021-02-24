// import App from 'next/app'
import Link from 'next/link'
import './style.scss'

function MyApp({ Component, pageProps }) {
  // return 
  return (
    <div>
      <nav>
        <div className="wrapper">
          <div className="header-wrapper">
            <div className="header-col">
              <Link href="/">
                <a>
                  <svg className="logo-container" viewBox="0 0 12.4355 5.8209889">
                    <g transform="translate(-1.0582919,-1.0582557)">
                      <path className="logo" d="m 1.9843752,5.953161 3.96875,-3.9688494 2.6458334,2.6458994 1.3229163,-1.32295 2.6458331,2.6459" id="path862" />
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="header-col">
              <Link href="/about">
                <a>
                  About
              </a>
              </Link>
              <Link href="/blog">
                <a>
                  Blog
              </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="content">
        <div className="wrapper">
          <Component {...pageProps} />
        </div>
      </div>
      <footer>
        <div className="wrapper">
          <div className="footer-wrapper">
            <div className="footer-col">
              <ul className="dotless-list">
                <li>mntn.dev</li>
                <li>Thomas Gorham 2021</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul className="dotless-list">
                <li>
                  <Link href="/colophon">
                    <a>
                      Colophon
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
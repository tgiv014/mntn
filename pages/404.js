import Link from 'next/link'

export default function AwBeans(){
    return (
        <div>
            <h1>Aw, beans (Error 404)</h1>
            <center>
                <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">aw beans</p>
                    &mdash; Griffin&#39;s Cool 2018 Tweets (@griffinmcelroy) 
                    <a href="https://twitter.com/griffinmcelroy/status/820789387566923777?ref_src=twsrc%5Etfw">January 16, 2017</a>
                </blockquote><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </center>
            <p>The page you're looking for doesn't exist...</p>
            <p>Why not head back <Link href="/">home</Link>?</p>
        </div>
    )
}
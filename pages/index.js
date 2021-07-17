// my-domain.com/

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>First next app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="nav">
          <ul className="ul-nav">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About me</Link></li>
            <li><Link href="/contact">Contact me</Link></li>
          </ul>
        </nav>

        <div className="header-section text-center">
          <h1 className="text-header">
            First next.js project
          </h1>
          <h3 className="text-header__desc">
            Welcome to the project, enjoy! B)
          </h3>

          <button className="btn-dark">Continue !</button>
        </div>
      </header>

      <footer className="footer">
        <p className="text-center"> this a test footer, Which copyright?! </p>
      </footer>
    </div>
  )
}

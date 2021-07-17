// my-domain.com/about

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

function contact() {
    return (
        <div className="container">
            <Head>
                <title>First next app</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="nav">
                <ul className="ul-nav">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About me</Link></li>
                    <li><Link href="/contact">Contact me</Link></li>
                </ul>
            </nav>
            
            <main className="post-container">
                <div className="main-post">
                    <h3 className="head-text">Contact me</h3>
                    <p className="text-body">
                        for send a message for me, please write your message to below form :)
                    </p>

                    <div className="form-container"> 
                        <form action="">
                            <label htmlFor="name">Username</label>
                            <input type="text" id="name" placeholder="ex: nafas"/>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="ex: example@gmail.com"/>
                            <label htmlFor="message">Message</label>
                            <textarea cols="30" rows="10" id="message" placeholder="write message, ex: hello"></textarea>
                            <button className="btn-dark">send message</button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p className="text-center"> this a test footer, Which copyright?! </p>
            </footer>
        </div>
    )
}

export default contact;

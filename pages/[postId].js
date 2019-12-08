import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown'

const tekpost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="hero-title">Hakkı KARAHAN</h1>
      <div className="hero-social-links">
        <Link href="//www.twitter.com"><a className="social-link" prefetch="false">Twitter</a></Link>
        <Link href="//www.linkedin.com/in/hakkikarahan"><a className="social-link" prefetch="false">Linkedin</a></Link>
      </div>
    </div>



    <div className="blog">
      <h3 className="blog-title">
        <p>{post.title}</p>
        {/* <Link href={post.slug}> */}
        {/* <a className="blog-title-link">{post.title}</a> */}
        {/* </Link> */}
      </h3>
      <div className="blog-text"><code>{post.detail}</code>
      </div>
      <div className="blog-date">{post.date}</div>
    </div>

    <style jsx>{`
      .container{
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
      }

      .hero{
        text-align:center;
        margin: 90px 0;
      }
      .hero-title{
        font-size: 48px;
      }

      .social-link:first-child{
        margin-right: 8px;
      }

      .blog-date{
        text-align:right;
        color: #DE6E4B;
        margin: 12px 0 48px 0;
      }

      a{
        color:#35459e;
        text-decoration:none;
      }
    `}</style>
  </div>
)

tekpost.getInitialProps = async ({ req, query }) => {
  // console.log(query);

  const res = await fetch(`http://localhost:3001/api/posts/${query.postId}`)


  const json = await res.json()
  console.log(json.data);

  return { post: json.data }
}

export default tekpost;

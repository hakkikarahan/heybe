import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown'
// import Prettifier from 'prettifier'


const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <Nav /> */}

    <div className="hero">
      <h1 className="hero-title">Hakkı KARAHAN</h1>
      <div className="hero-social-links">
        <Link href="//www.twitter.com"><a className="social-link" prefetch="false">Twitter</a></Link>
        <Link href="//www.linkedin.com/in/hakkikarahan"><a className="social-link" prefetch="false">Linkedin</a></Link>
      </div>
    </div>

    {posts.map(post => (
      <div className="blog">
        <h3 className="blog-title">
          <Link href={post._id}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h3>
        {/* <Prettifier className="prettyprint lang-plsql"> {post.detail}></Prettifier> */}
        <div className="blog-text"> <pre className="prettyprint lang-plsql"> {post.detail}</pre>
          {/* <ReactMarkdown source={post.details} /> */}
        </div>
        <div className="blog-date">
          {post.date}
        </div>
      </div>
    ))}

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

Home.getInitialProps = async ({ req }) => {
  // const res = await fetch('http://localhost:3000/api/posts')
  const res = await fetch('http://localhost:3001/api/posts')
  // console.log(res.json);

  const json = await res.json()
  // console.log(json.data);
  return { posts: json.data }
}


export default Home

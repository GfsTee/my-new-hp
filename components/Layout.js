import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Georg Treitz | {props.title}</title>
        <meta name="description" content="Georg Treitz - Malerei - Lichtkunst" />
        <meta name="author" content="GFSTee" />
        <meta name="google-site-verification" content="Kb27upnjE60z-tsDvp92fDMdDvF1Mzdj1EPZIoMJ7s8" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* icons added */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* icon ende */}
      </Head>
      <div className="wrapper">
        <Nav />
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
      <style jsx>{`
    
      `}</style>

      <style jsx global>{`
      
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        src: local('Roboto Light'), local('Roboto-Light'),
             url('/fonts/roboto-v20-latin-300.woff2') format('woff2'),
             url('/fonts/roboto-v20-latin-300.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
             url('/fonts/roboto-v20-latin-300italic.woff2') format('woff2'),
             url('/fonts/roboto-v20-latin-300italic.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'),
             url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
             url('/fonts/roboto-v20-latin-regular.woff') format('woff');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        src: local('Roboto Italic'), local('Roboto-Italic'),
             url('/fonts/roboto-v20-latin-italic.woff2') format('woff2'),
             url('/fonts/roboto-v20-latin-italic.woff') format('woff');
      }
      html {
        scroll-behavior: smooth;
      }
      
      .wrapper {
        overflow-x: hidden;
      }
        body {
          overflow-x: hidden;
          font-family: 'Roboto', sans-serif;
          color: #172626;
        }
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        main {
          padding: 5vw;
          min-height: 85vh;
        }
      `}</style>
    </div>
  )
}

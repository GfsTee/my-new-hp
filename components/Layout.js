import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Georg Treitz | {props.title}</title>
        <meta name="description" content="Georg Treitz - Malerei - Lichtkunst" />
        <meta name="google-site-verification" content="Kb27upnjE60z-tsDvp92fDMdDvF1Mzdj1EPZIoMJ7s8" />
        <link rel="icon" href="/favicon.ico" />
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
             url('/fonts/roboto-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
             url('/fonts/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
             url('/fonts/roboto-v20-latin-300italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
             url('/fonts/roboto-v20-latin-300italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'),
             url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
             url('/fonts/roboto-v20-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        src: local('Roboto Italic'), local('Roboto-Italic'),
             url('/fonts/roboto-v20-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
             url('/fonts/roboto-v20-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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
          min-height: 90vh;
        }
      `}</style>
    </div>
  )
}

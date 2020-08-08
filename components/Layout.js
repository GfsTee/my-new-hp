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
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap');
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

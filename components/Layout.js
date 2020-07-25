import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Georg Treitz | {props.title}</title>
        <meta name="description" content="Georg Treitz - Malerei - Lichtkunst" />

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
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,900&display=swap');
      html {
        scroll-behavior: smooth;
      }
      
      .wrapper {
        overflow-x: hidden;
      }
        body {
          overflow-x: hidden;
          // font-family: 'Open Sans', sans-serif;
          font-family: 'Roboto', sans-serif;
          height: 100vh;
          color: #172626;
        }
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        main {
          // width: 90%;
          // margin: 5vh auto;
          padding: 5vw;
          min-height: 90vh;
        }
      `}</style>
    </div>
  )
}

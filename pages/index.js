import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Georg Treitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Footer />

      <style jsx>{`
        h1 {
          color: white
        }
      `}</style>

      <style jsx global>{`
        html {

        }
        body {
          padding: 0;
          margin: 0;
          
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

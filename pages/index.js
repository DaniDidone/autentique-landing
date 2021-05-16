import Head from 'next/head'
import Header from '../component/header'
import Hero from '../component/hero'
import About from '../component/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />

    </>
  )
}

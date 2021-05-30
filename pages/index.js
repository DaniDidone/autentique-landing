import Head from 'next/head'

import Header from '../component/header'
import Hero from '../component/hero'
import About from '../component/about'
import Testimonial from '../component/testimonial'

export default function Home() {
  return (
    <>
      <Head>
        <title>Autentique | Assine e Solicite Assinatura Digital de Documentos</title>
        <meta name="description" content="Assine e solicite assinatura digital grátis de documentos e contratos. É fácil, rápido e seguro, crie uma conta e comece a utilizar sem nenhum compromisso." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <Testimonial />

    </>
  )
}

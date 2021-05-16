import Image from 'next/image'
import Link from 'next/link'
 
export default function header () {
  return(
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">
          Assine e solicite <span className="hero__title--primary">assinatura digital</span> de contratos e outros documentos
        </h1>
        <p className="hero__excerpt">
          Simplifique a gestão dos seus contratos e assinaturas utilizando o Autentique grátis até 5 documentos por mês
        </p>
        <div className="hero__button-holder">
        <Link href="/"><a className="hero__button hero__button--primary">Como funciona</a></Link>
        <Link href="/"><a className="hero__button">Planos</a></Link>
        </div>
      </div>
    </section>
  )
}
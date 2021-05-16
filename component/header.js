import Image from 'next/image'
import Link from 'next/link'
 
export default function header () {
  return(
    <header className="header">
      <div className="header__container container">
        <Link href="/"><a className="header__logo-container">
          <Image src="/autentique.svg" alt="Vercel Logo" width={32} height={34} />
        </a></Link>

        <div className="header__button-holder">
        <Link href="/"><a className="header__button">Entrar</a></Link>
        <Link href="/"><a className="header__button header__button--primary">Cadastrar-se</a></Link>
        </div>
      </div>
    </header>
  )
}
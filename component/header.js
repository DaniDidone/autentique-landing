import React, {useEffect, useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'
 
export default function header () {
  const [isTop, setIsTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if(scrollPosition >= 10) setIsTop(true)
      else setIsTop(false)
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return(
    <header className={`header
      ${isTop === true ? 'header--scrolled' : ''}
    `}>
      <div className="header__container container">
        <Link href="/"><a className="header__logo-container">
          {isTop === true && <Image src="/autentique_white.svg" alt="Vercel Logo" width={32} height={34} />}
          {isTop === false && <Image src="/autentique.svg" alt="Vercel Logo" width={32} height={34} />}
        </a></Link>

        <div className="header__button-holder">
        <Link href="/"><a className={`header__button
          ${isTop === true ? 'header__button--primary header__button--shadow-none' : ''}
        `}>Entrar</a></Link>
        <Link href="/"><a className={`header__button
          ${isTop === false ? 'header__button--primary' : ''}
        `}>Cadastrar-se</a></Link>
        </div>
      </div>
    </header>
  )
}
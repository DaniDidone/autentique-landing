import React, {useEffect, useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'
 
export default function header () {
  const [scrollY, setScrollY] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if(scrollPosition >= 10) setScrollY(true)
      else setScrollY(false)
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return(
    <header className={`header
      ${scrollY === true ? 'header--scrolled' : ''}
    `}>
      <div className="header__container container">
        <Link href="/"><a className="header__logo-container">
          {scrollY === true && <Image src="/autentique_white.svg" alt="Vercel Logo" width={32} height={34} />}
          {scrollY === false && <Image src="/autentique.svg" alt="Vercel Logo" width={32} height={34} />}
        </a></Link>

        <div className="header__button-holder">
        <Link href="/"><a className={`header__button
          ${scrollY === true ? 'header__button--primary header__button--shadow-none' : ''}
        `}>Entrar</a></Link>
        <Link href="/"><a className={`header__button
          ${scrollY === false ? 'header__button--primary' : ''}
        `}>Cadastrar-se</a></Link>
        </div>
      </div>
    </header>
  )
}
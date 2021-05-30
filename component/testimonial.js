import React, { useState, useEffect } from 'react';

import Link from 'next/link'

const lines = Array(3).fill(undefined)
const itens = Array(15).fill({
  name: "Cassiano Calegari",
  company: "Autentique",
  testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

export default function Testimonial () {
  const [isVisible, setVisible] = useState(false)
  const [horizontal, setHorizontal] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const totalWidth = document.querySelector(".testimonial .person").scrollWidth
      const totalHeight = document.querySelector(".testimonial").scrollHeight
      const scrollPosition = document.querySelector(".testimonial").getBoundingClientRect().top



      setHorizontal((scrollPosition - totalHeight) * -1)
      setVisible((scrollPosition - totalHeight) < 0)
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <section className="testimonial">
      <div className="testimonial__container container">
        <div className="testimonial__head">
          <div className="testimonial__head-text">
            <h2 className="testimonial__title">O que falam do Autentique...</h2>
            <p className="testimonial__description">Mais de 300.000 pessoas e 20.000 empresas confiam no Autentique para gerenciar o seus contratos e documentos</p>
          </div>
          <div className="testimonial__score-box">
            <span className="testimonial__score">8,7</span>
            <p className="testimonial__score-name">Net Promoter Score</p>
          </div>
        </div>{horizontal}
        <div 
          className="testimonial__body"
          style={{transform: `translate3d(0%, 0px, 0px)` }}
          >
          {lines.map((a, b) => (
            <div 
              className="testimonial__body-list" 
              key={`testimonial__body-list${b}`}
              >
              {itens.map((c, d) => (
                <div className="person" key={`testimonial__person-${b}-${d}`}>
                  <div className="person__head">
                    <span className="person__name">{c.name}</span>
                    <span className="person__company">{c.company}</span>
                  </div>
                  <div className="person__testimony">{c.testimony}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="testimonial__footer">
          
        </div>
      </div>
    </section>
  )
}
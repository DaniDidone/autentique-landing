import React, { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'

const content = [
  {
    id: "solicitar",
    title: "Solictar assinatura",
    content: [
      {
        title: 'Selecione o arquivo ou modelo',
        description: 'Selecione o arquivo ou modelo de documento que você gostaria de assinar. Você já pode enviar tudo prontinho para assinatura em formato doc, docx, PDF… Ou criar um modelo de documento com campos personalizados que você preenche antes de enviar aos signatários',
        img_url: '/about/solicitar/001.svg'
      },
      {
        title: 'Indique os signatários',
        description: 'Preencha quem serão as pessoas que irão assinar o documento. O documento pode ser enviado para assinatura por email automaticamente pelo Autentique, ou você pode gerar um link de assinatura para enviar ao signatário por WhatsApp',
        img_url: '/about/solicitar/002.svg'
      },
      {
        title: 'Posicione as assinaturas',
        description: 'Você pode escolher onde a assinatura de cada signatário aparecerá no documento. É só posicionar o campo de assinatura no local adequado e, quando aquela pessoa assinar, a assinatura dela aparecerá no local.',
        img_url: '/about/solicitar/003.svg'
      },
      {
        title: 'Aguarde o documento ser assinado',
        description: 'Tudo pronto! O signatário já receberá automaticamente o email solicitando a sua assinatura ou o Autentique irá exibir para você o link de assinatura para que você repasse diretamente para ele. Todos os documentos e cada via do contrato ficam guardadinhos no Autentique, assim você pode dormir tranquilo!',
        img_url: '/about/solicitar/004.svg'
      }
    ]
  },
  {
    id: "assinar",
    title: "Assinar um documento",
    content: [
      {
        title: 'Acesse o email ou link de assinatura',
        description: 'Acesse o seu email ou o link de assinatura enviado pela pessoa ou empresa que está solicitando a sua assinatura. O Autentique irá enviar um email automaticamente para você, com um botão para acessar e assinar o documento, a pessoa solicitando a sua assinatura também poderá enviar o link manualmente para você, por WhatsApp ou outro meio.',
        img_url: '/about/assinar/001.svg'
      },
      {
        title: 'Clique em “assinar”',
        description: 'Ao acessar o link de assinatura, você poderá ler o documento e na parte de baixo da tela haverá o botão "assinar", é só clicar nele para iniciar o procedimento de assinatura.',
        img_url: '/about/assinar/002.svg'
      },
      {
        title: 'Preencha os dados da tela',
        description: 'Preencha as informações solicitadas pelo Autentique (nome, CPF e data de nascimento) para assinar o documento. Esses dados serão inseridos no histórico de ações do documento para identificar você.',
        img_url: '/about/assinar/003.svg'
      },
      {
        title: 'Personalize a sua assinatura',
        description: 'Quase lá! Falta apenas selecionar a aparência da sua assinatura, você pode usar uma gerada pelo Autentique com base no seu nome, desenhar a sua própria assinatura, enviar uma imagem dela ou usar uma marcação de "assinado eletronicamente".',
        img_url: '/about/assinar/004.svg'
      }
    ]
  }
]
 
export default function About () {
  const [tab, setTab] = useState('solicitar');

  return(
    <section className="about">
      <div className="about__container container">
        <h2 className="about__title">Como funciona</h2>

        <div className="about__tabbutton-holder">
          {content.map((e,i) => (
            <button 
            key={e.id}
            type="button" 
            className={`about__tabbutton ${tab === e.id ? 'about__tabbutton--active' : ''}`}
            onClick={() => setTab(e.id)}>
              {e.title}
            </button>
          ))}
        </div>

        <div className="about__tab-holder">
          {content.map((e,i) => (
            <div 
              key={e.id + 'tab'}
              className={`about__tab ${tab === e.id ? 'about__tab--active' : ''}`}>
              
              {e.content.map((j, k) => (
                <div className="about__tab-item item" key={e.id + 'item' + k}>
                  <div className="item__text-container">
                    <h3 className="item__title">{j.title}</h3>
                    <p className="item__descr">{j.description}</p>
                  </div>
                  <div className="item__figure-container">
                    <img className="item__img" src={j.img_url} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <h3 className="about__subtitle">Quer experimentar?</h3>
        <Link href="/"><a className="about__button">Criar uma conta</a></Link>
      </div>
    </section>
  )
}
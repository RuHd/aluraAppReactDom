import React from 'react'
import './Banner.css'
import circleColorImg from '../../video-2.3/assets/circulo_colorido.png'
import profilePhoto from '../../video-2.3/assets/minha_foto.png'

const Banner = () => {
  return (
    <>
      <section className='Banner'>
          <div className='BannerTxt'>
              <h1 style={{fontSize: "64px"}}>Olá Mundo!</h1> 
              <p style={{fontSize: "24px", lineHeight: "32px"}}>
                  Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo.
                  Instrutor de Front-end da Alura. Aqui, compartilho vários
                  conhecimentosd, espero que aprenda algo novo :)
              </p>
          </div>
          <div className='ImageSection'>
              <img src={circleColorImg} alt='Círculo Colorido'/>
              <img src={profilePhoto} alt='Foto de Perfil'/>
          </div>     
      </section>
    </>
    
  )
}

export default Banner
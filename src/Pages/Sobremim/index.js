import React from 'react'
import './sobremim.css'
import antonioImg from '../../video-2.3/assets/sobre_mim_foto.png'
import sobreMimImg from '../../video-2.3/assets/sobre_mim_capa.png'

const SobreMim = () => {
  return (
    <article className='sobreMim'>
        <section className = "sobreMim-capa">
            <img src={sobreMimImg}/>
            <h1>Sobre Mim</h1>
        </section>
        <h2>Olá, eu sou o Antônio</h2>

        <main>
            <section>
              <p>
                  Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.<br/><br/>
                  Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.<br/><br/>
                  No ensino superior, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de Educação Tutorial), um grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um dos mantenedores do site deles. <br/><br/>
              </p>
              <img src={antonioImg}/>
            </section>
            <p>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.<br/><br/>
                E foi enquanto eu estava no PET que decidi procurar um estágio em desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e percebi que ela aliava duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time.<br/><br/>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>
        </main>
    </article>
  )
}

export default SobreMim
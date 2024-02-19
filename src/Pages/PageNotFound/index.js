import React from 'react'
import './PageNotFound.css'
import errorImg from '../../video-2.3/assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

  const navegar = useNavigate()
  return (
    <div className='pageNotFound'>     
        <section>
            <h1>404</h1>

            <h2>Ops! Página não encontrada.</h2>
            <p>
                Tem certeza de que era isso que você estava procurando? 
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <button onClick={() => navegar(-1)} className='btn--voltar'>Voltar</button> 
        </section>   

        
        <img src={errorImg} alt='Error'/>
    </div>
  )
}

export default PageNotFound
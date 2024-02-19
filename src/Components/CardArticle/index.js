import React from 'react'
import './CardArticle.css'
import { Link } from 'react-router-dom'

const CardArticle = (props) => {
  return (
    <Link to={`/posts/${props.id}`}>   
      <div className='CardArticle'>
          <img src={props.articleImg} alt={props.imgDescription}/>
          <h3>{props.articleTitle}</h3>

          <button type='button'> Ler </button>
      </div>
    </Link>
  )
}

export default CardArticle
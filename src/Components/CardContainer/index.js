import React from 'react'
import imgGallery from '../../utils/imgsGallery'
import CardArticle from '../CardArticle'
import './CardContainer.css'
import posts from "../../video-3.1/json/posts.json"


const CardContainer = () => {
  console.log(posts)
  return (
    <section className='PostGallery'>
        <div className='CardContainer'>
            {posts.map((posts, i) => <CardArticle key= {posts.id} articleImg= {imgGallery[i]} imgDescription = {posts.titulo} articleTitle = {posts.titulo} id = {posts.id}/>)}
        </div>      
    </section>
  )
}

export default CardContainer
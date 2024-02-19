import React from 'react'
import './postModelo.css'

const PostModelo = ({capaImg, tituloPost, children}) => {
    console.log(capaImg)
 
  return (
    <>
        <section  className='postTitle'>
            <h1 >{tituloPost}</h1>
        </section>   
        {children} 
    </>
  )
}

export default PostModelo
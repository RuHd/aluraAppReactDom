import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from '../../video-3.1/json/posts.json'
import './post.css'
import Markdown from 'react-markdown'
import PostModelo from '../../Components/PostModelo'
import CardArticle from '../../Components/CardArticle'
import imgGallery from '../../utils/imgsGallery'
import PaginaPadrao from '../PaginaPadrao'
import PageNotFound from '../PageNotFound'

const Post = () => {
  const params = useParams()
  const post = posts.find(post => {
    return post.id === Number(params.id)
  })

  if (!post) return (
    <PageNotFound />
  )

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <>
            <section className='post'>
              <PostModelo tituloPost={post.titulo} capaImg={`/public/assets/${post.id}/capa.png`}>
                <Markdown>
                  {post.texto}
                </Markdown>
              </PostModelo>
            </section>
            <h2 className='outrosPosts-title'>Dê uma olhada em outros posts!</h2>
            <div className='outrosPosts'>

              {posts.map((posts, i) => {
                if (posts.id !== Number(params.id))
                  return <CardArticle key={posts.id} articleImg={imgGallery[i]} imgDescription={posts.titulo} articleTitle={posts.titulo} id={posts.id} />
              })}
            </div>
          </>
        }/>
      </Route>
    </Routes>

  )
}

export default Post
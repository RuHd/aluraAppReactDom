import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import SobreMim from './Pages/Sobremim';
import Menu from './Components/Menu';
import PaginaPadrao from './Pages/PaginaPadrao';
import Footer from './Components/Footer';
import Post from './Pages/Post';
import PageNotFound from './Pages/PageNotFound';


function App() {
  return (
    <>
      <BrowserRouter>
          <Menu/>
          <Routes>
              <Route path='/' element={<PaginaPadrao/>}>
                <Route index element = {<Inicio/>}/>
                <Route path="/sobremim" element = {<SobreMim/>}/>   
              </Route>         
              <Route path="/posts/:id" element = {<Post/>}/>
              <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </>
    
  );
}

export default App;

import React from 'react'
import './PaginaPadrao.css'
import Banner from '../../Components/Banner'
import { Outlet } from 'react-router-dom'

const PaginaPadrao = ({Children}) => {
  return (
    <main>
        <Banner/>

        <Outlet/>
        {Children}
    </main>
  )
}

export default PaginaPadrao
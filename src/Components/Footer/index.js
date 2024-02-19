import React from 'react'
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import './Footer.css'
import { IconContext } from 'react-icons';


const Footer = () => {
  return (
    <footer className='Footer'>
        <IconContext.Provider value = {{className: "trademarkIcon"}}>
            <PiTrademarkRegisteredBold fill='white' size={20}/>
        </IconContext.Provider>
        <span>
            Desenvolvido por Ruan Mesquita
        </span>    
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export const Menu = () => {
    

  return (
    <div className='menu header animate__animated animate__fadeInDown'>
        <ul className='menu-list '>
        <HashLink 
            to="#Main" smooth

        ><li  className='animate__animated animate__flipInX animate__delay-1s	1s'>Inicio</li></HashLink >
        

        <HashLink 
             
              to="#candidatos" smooth

        ><li className='animate__animated animate__flipInX animate__delay-1s	1s'>Candidatos a gobernación</li></HashLink >


        <Link 
           
            to="/distritos"

        ><li className='animate__animated animate__flipInX animate__delay-1s	1s'>Distritos</li></Link>
        </ul>
    </div>
  )
}

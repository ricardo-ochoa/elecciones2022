import React from 'react'
import { Link } from 'react-router-dom'

export const CardDiputados = ({id, img, name, distrito, coalicion}) => {
  return (
    <Link to={`/${id}`}>
    <div className="card_diputados">
    <img
        src={img}
        alt={name} />
    <div className='info_description'>
        <p className='names_diputados'>{name}</p>
        <p className='info_partido_diputados'>{coalicion}</p>
        <p className='info_partido_diputados'>Distrito {distrito}</p>        
    </div>
    </div>
    </Link>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({id,name,coalicion,img}) => {
  return (
    <Link to={`/${id}`}>
      <div className="card_people">
                  <img
                      src={img}
                      alt={name} />
                  <div className='info_description'>
                      <p className='names'>{name}</p>
                      <p className='info_partido'>{coalicion}</p>        
                  </div>
      </div>
    </Link>
  )
}

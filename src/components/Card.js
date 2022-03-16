import React from 'react'

export const Card = ({name,coalicion,img}) => {
  return (
    <div className="card_people">
                <img
                    src={img}
                    alt={name} />
                <div className='info_description'>
                    <p className='names'>{name}</p>
                    <p className='info_partido'>{coalicion}</p>        
                </div>

    </div>
  )
}

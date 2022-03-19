import React from 'react'

export const CardDiputados = ({img, name, distrito, coalicion}) => {
  return (
    <div className="card_diputados">
    <img
        src={img}
        alt={name} />
    <div className='info_description'>
        <p className='names_diputados'>{name}</p>
        <p className='info_partido_diputados'>{coalicion}</p>
        <p className='info_partido_diputados'>{distrito}</p>        
    </div>

</div>
  )
}

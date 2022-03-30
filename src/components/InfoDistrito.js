import React from 'react'
import { CardDiputados } from './CardDiputados'

export const InfoDistrito = ({ id,img, name, coalicion ,distrito, func }) => {
  return (
      <>
      <div>Distrito { distrito }</div>
      <div>

                  <CardDiputados 
                  key={id} 
                  img={img}
                  name={name}
                  distrito={distrito}
                  coalicion={coalicion}
                  />

      </div>
      <div>
          Mapa
      </div>
      
      </>
  )
}

import React from 'react'


import  banner_image  from "../assets/bg.jpg";
 
export const Banner = () => {
  return (
      <div className='container-banner'>
          <div className='banner'>
              <h2>Distritos Quintana Roo</h2>
              <p>Reparto de candidatos a diputados. 15 electos por mayoría relativa en cada uno de los distrito electorales del estado y 10 designados mediante el principio de representación proporcional, electos para un periodo de dos años para integrar la XVII Legislatura.</p>
          </div>
            <img className='image-banner' src={banner_image} alt='banner image'></img>
      </div>
  )
}

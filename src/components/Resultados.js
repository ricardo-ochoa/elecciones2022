import React from 'react'

import { SquareLink } from './SquareLink';

export const Resultados = () => {

  return (
    <div className='resultados'>
        <div className='section-resultados'>
            <div className='diputados-text'>
                    <p className='section-title'>RESULTADOS</p>
                    <h2 className='subtitle'>No te pierdas y mantente informado</h2>

                <p className='text_description_partidos'>
                Si no sabes si puedes votar o cual es tu casilla para votar estas elecciones, búscala en los siguientes enlaces, es importante tu participación, también puedes mantenerte infromado de los resuldos en las publicaciones del PREP.
                </p>
            </div>
        </div>

        <div className='resultados_list'>
            <SquareLink
                img={"https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647661950/Vota/credencial_bsoke9.jpg"}
                name={"Padrón electoral"}
                title={"Padrón electoral"}
                description={"Sólo las credenciales vigentes pueden votar."}
            />
            <SquareLink
                img={"https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647661950/Vota/casillas_lpwxhw.jpg"}
                name={"Casillas"}
                title={"Casillas"}
                description={"Ubica tu casilla para estas elecciones 2022"}
            />
            <SquareLink
                img={"https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647661950/Vota/resultados_b9d0iw.jpg"}
                name={"PREP 2022 QUINTANA ROO"}
                title={"PREP 2022 QUINTANA ROO"}
                description={"Programa de resultados preliminares"}
            />           
            
        </div>
    </div>
  )
}

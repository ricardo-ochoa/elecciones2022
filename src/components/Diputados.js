import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { CardDiputados } from './CardDiputados';

export const Diputados = ({candidatos}) => {


    const {  } = useParams();



  return (
    <div>
        <section>
        <div className='section-diputados'>
            <div className='diputados-text'>
                    <p className='section-title'>DIPUTADOS</p>
                    <h2 className='subtitle'>Candidatos a diputados</h2>

                <p className='text_description_partidos'>
                15 electos por mayoría relativa en cada uno de los distrito electorales del estado y 10 designados mediante el principio de representación proporcional, electos para un periodo de dos años para integrar la XVII Legislatura. 
                </p>

            <Link to={`/distritos`}>
            <button className='btn-primary'>Ver reparto y distritos</button>
            </Link>
            </div>
        </div>

        <div className='diputados_list'>

            {
                candidatos.slice(0, 4).map((candidato) => {
                    
                    return(
                            <CardDiputados
                            id={candidato.id}
                            key={candidato.id} 
                            img={candidato.img}
                            name={candidato.name}
                            distrito={candidato.distrito}
                            coalicion={candidato.coalicion}
                            />
                    );
                })                
            }
        </div>
        </section>
    </div>
  )
}

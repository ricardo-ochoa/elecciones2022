import React, { useState, useEffect } from 'react';
import {Card} from './Card';

export const Gobernador = ({ candidatos }) => {

  return (
    <div id='candidatos'>
        <section>
        <div className='section-gobernador'>
            <div className='gobernador-text'>
                    <p className='section-title'>GOBERNACIÓN</p>
                    <h2 className='subtitle'>Candidatos al gobierno de Quintana Roo</h2>

                <p className='text_description_partidos'>
                Conoce a los candidatos a gobernación del estado de Quintana Roo.
                </p>
            </div>
        </div>

        <div className='gob_list'>
            {
                candidatos.map((candidato) => {
                    return(
                        <Card
                        id={candidato.id}
                        key={candidato.id} 
                        img={candidato.img}
                        name={candidato.name}
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
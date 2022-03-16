import React, { useState, useEffect } from 'react';
import {Card} from './Card';
import parseFile from "../info/api"


export const Gobernador = ({ candidatos }) => {

    const [person, setPerson] = useState([]);
    
    async function fetchParsedData() {
        const parsedData = await parseFile();
        return setPerson(...person, parsedData)
    }

    useEffect(() => {
        fetchParsedData()
    }, [])
    

  return (
    <div>
        <section >
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
                person.map((candidato) => {
                    return(
                        <Card
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
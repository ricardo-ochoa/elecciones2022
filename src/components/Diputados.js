import React, {useState, useEffect} from 'react'
import parseFile from "../info/api"
import { CardDiputados } from './CardDiputados';

export const Diputados = ({candidatos}) => {

    const [person, setPerson] = useState([]);
    const [filtered, setFiltered] = useState([]);
    
    async function fetchParsedData() {
        const parsedData = await parseFile()
        setPerson(parsedData)
    }

    useEffect(() => { 
        fetchParsedData()
    }, [])

    useEffect(() => { 
        const filtered = person.filter((element) => (
            element.puesto === "Diputado"
        ));
        setFiltered(filtered)
    }, [person])


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
            <button className='btn-primary'>Ver reparto y distritos</button>
            </div>
        </div>

        <div className='diputados_list'>

            {
                filtered.map((candidato) => {
                    return(
                        <CardDiputados
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

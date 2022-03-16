import React from 'react'

export const Coaliciones = () => {
  return (
    <>
    <section className='coalicion-section'>
        <div className='section-coaliciones'>

            <div className='partidos-text'>
                    <p className='section-title'>ALIANZAS Y CANDIDATURAS</p>
                    <h2 className='subtitle'>Coaliciones 2022</h2>
            </div>

            <div className='vaporqroo'>
                <img className="partido-logo-coaliciones"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_1_zeytub.png' }
                    alt="PAN" />

                <img className="partido-logo-coaliciones"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_6_jz6o0u.png' }
                    alt="Movimiento ciudadano" />

                <h4>Va por Quintana Roo</h4>
                <p className='text_description_coalicion'>
                El Partido Acción Nacional y el Partido de la Revolución Democrática acordaron presentarse en coalición en las elecciones estatales.
                </p>
            </div>

            <div className='pri'>
                <img className="partido-logo-coaliciones"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145000/Vota/480px-PAN_logo__Mexico_2_vw0enr.png' }
                    alt="PRI" />

                <h4>Partido Revolucionario Institucional</h4>
                <p className='text_description_coalicion'>
                El Partido Revolucionario Institucional decidió no formar alianzas para competir en la elección estatal.
                </p>
            </div>

            <div className='movimiento'>
                <img className="partido-logo-coaliciones"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145000/Vota/480px-PAN_logo__Mexico_3_lbco0i.png' }
                    alt="Movimiento Ciudadano" />

                <h4>Movimiento Ciudadano</h4>
                <p className='text_description_coalicion'>
                El partido Movimiento Ciudadano decidió competir en solitario en las elecciones.
                </p>
            </div>

            <div className='juntoshacemos'>
                <img className="partido-logo-coaliciones"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_1_zeytub.png' }
                    alt="PAN" />

                <img className="partido-logo-coaliciones"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_6_jz6o0u.png' }
                    alt="Movimiento ciudadano" />

                <h4>Juntos Hacemos Historia</h4>
                <p className='text_description_coalicion'>
                El 9 de noviembre de 2021 los dirigentes de los partidos Movimiento Regeneración Nacional, Partido del Trabajo y Partido Verde Ecologista de México acordaron competir en coalición en las elecciones de Quintana Roo bajo el nombre Juntos Hacemos Historia.
                </p>
            </div>

            <div className='autentico'>
                <img className="partido-logo-coaliciones"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_3-1_nmpyi1.png' }
                    alt="PAN" />

                <h4>Movimiento Auténtico Social</h4>
                <p className='text_description_coalicion'>
                El partido decidió que todas sus candidaturas fueran designadas directamente por un delegado especial del partido.
                </p>
            </div>

        </div>  
    </section>
    </>
  )
}

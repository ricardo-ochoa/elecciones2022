import React from 'react'

export const Partidos = () => {
  return (
    <div>
        <div className='section'>

            <div className='partidos-text'>
                    <p className='section-title'>PARTIDOS</p>
                    <h2 className='subtitle'>¿Qué partidos participan?</h2>
                    <p className='text_description_partidos'>
                    En las elecciones estatales tienen derecho a participar diez partidos políticos. Siete son partidos políticos con registro nacional y tres partidos políticos estatales:
                    </p>
            </div>

            <div className='partidos'>
                <h4>Nacionales:</h4>
                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_1_zeytub.png' }
                    alt="PAN" />

                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145000/Vota/480px-PAN_logo__Mexico_2_vw0enr.png' }
                    alt="PRI" />

                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145000/Vota/480px-PAN_logo__Mexico_3_lbco0i.png' }
                    alt="Movimiento ciudadano" />

                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_4_yl0uru.png' }
                    alt="PAN" />

                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_5_ovcadk.png' }
                    alt="PRI" />

                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_6_jz6o0u.png' }
                    alt="Movimiento ciudadano" />
                
                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_7_gdzgxc.png' }
                    alt="Movimiento ciudadano" />
            </div>

            <div className='partidos-locales'>
                <h4>Locales:</h4>

                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145000/Vota/480px-PAN_logo__Mexico_2-1_qheynn.png' }
                    alt="PRI" />

                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145000/Vota/480px-PAN_logo__Mexico_1-1_sfo83h.png' }
                    alt="Movimiento ciudadano" />
                
                <img className="partido-logo"
                    src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647145001/Vota/480px-PAN_logo__Mexico_3-1_nmpyi1.png' }
                    alt="Movimiento ciudadano" />
            </div>

        </div>


    </div>
  )
}

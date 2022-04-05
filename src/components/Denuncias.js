import React from 'react'

export const Denuncias = () => {
  return (
    <div>
    <div className='section_denuncias'>
        <div className='sugerencias_denuncias'>
            <div>
                <p className='subtitle_denuncias'>¿Quieres denunciar algo respecto a las elecciones?</p>
                <p className='text_description_denuncias'>
                Puesdes denunciar alguna anomalía con respecto a estas elecciones.<br></br>Conoce más sobre los delitos electorales <a className='link_more_info' href="http://google.com">aquí</a>.
                </p>
                <strong> <a className='link_denuncias' href="mailto:denuncias_electorale@quintanaroovota.com">denuncias_electorales@quintanaroovota.com</a> </strong>
            </div>
        </div>
            <p className='derechos'>© 2022 – Ochoagram</p>
    </div>
    </div>
  )
}

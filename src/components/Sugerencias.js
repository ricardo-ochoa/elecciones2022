import React from 'react'

export const Sugerencias = () => {
  return (
    <div>
    <div className='section-sugerencias'>
        <div className='sugerencias-text'>
            <div>
                <h2 className='subtitle subtitle_sugerencias'>Sugerencias</h2>
                <p className='text_description_sugerencias'>
                Tienes alguna sugerencia a considerar, escríbenos a: <br></br>
                <strong> <a className='link_sigerencias' href="mailto:sugerencias@quintanaroovota.com">sugerencias@quintanaroovota.com</a> </strong>
                </p>
            </div>
        
        <a href="mailto:sugerencias@quintanaroovota.com"> 
        <button className='btn-primary btn_sugerencia'>Escribir sugerencia</button>
        </a>
        </div>
    </div>
</div>
  )
}

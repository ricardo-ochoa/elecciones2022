import React from 'react'

export const Qrvota = () => {
  return (
    <section>

    <div className='section-iniciativa'>
        <div className='iniciativa-text'>
                <p className='section-title'>INICIATIVA / MOVIMIENTO</p>
               

                        <h2 className='subtitle-iniciativa'>#QRooVota</h2>

                <p className='text_description_partidos'>
                Es una iniciativa apartidista ciudadana y empresarial para generar cultura cívica y compromiso de emisión del voto en cualquier elección.
                </p>
                <p>Comparte tu opinión e importancia de salir a votar con el Hashtag

                <a className='link_ht'
                    target="_blank"
                    href='https://twitter.com/search?q=%23QRoovota&src=typed_query&f=top'> 
                    <strong>#QrooVota</strong>
                </a>

                    
                    en las diferentes redes sociales como instagram, Twitter y Facebook.</p>
        </div>

        <div className='image-iniciativa-section'>
            <img className="image-iniciativa"
                src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647490802/Vota/qroovota_pms9rp.jpg' }
                alt="Quintana Roo Vota" />
        </div>
    </div>

</section>
  )
}

import React from 'react'

export const MainHeader = () => {
  return (
    <div id='Main'>
        <section>
        <div className='bg'>
            <div className='main'>
                <div className='main-text'>
                    <h1>
                    Domingo 5 de junio
                    </h1>
                    <h4>Elecciones estatales de Quintana Roo de 2022</h4>
                    <p className='text_description'>Los mexicanos volvemos a las urnas para participar en las elecciones ordinarias. En Quintana Roo, también se buscará Gobernatura del estado, 15 diputaciones por mayoría relativa y 10 de representación proporcional.</p>
                </div>

                <div className='wrapper animate__animated animate__zoomIn'>
                    <div  className='imagemain' id='canvas'>
                    
                    <div className='bop'>
                    <div className="card-home">
                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647120313/Vota/tres_tec20n.png' }
                            alt="peronas" />

                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647120313/Vota/dos_vh23hv.png' }
                            alt="peronas" />

                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647409328/Vota/cinco_n_dlwmoz.png' }
                            alt="peronas" />
                            
                    </div>
                    </div>
                    
                    <div  className='bop'>
                    <div className="card-home2">
                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647120313/Vota/seis_hmeimy.png' }
                            alt="peronas" />

                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647120313/Vota/uno_dasjna.png' }
                            alt="peronas" />

                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647412291/Vota/seis__m7wojy.png' }
                            alt="peronas" />
                            

                    </div>
                    </div>
                    
                    <div  className='bop'>
                    <div className="card-home3">
                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647120313/Vota/cinco_qyiwsw.png' }
                            alt="peronas" />

                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647121568/Vota/cuatro_uavi66.png' }
                            alt="peronas" />

                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647408769/Vota/men_galsses_t8unk0.png' }
                            alt="peronas" />
                        
                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647120313/Vota/dos_vh23hv.png' }
                            alt="peronas" />

                        <img className="card"
                            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1647120313/Vota/cinco_qyiwsw.png' }
                            alt="peronas" />
                    </div>
                    </div>

                    </div>
                </div>

            </div>

        </div>
        </section>
    </div>
  )
}

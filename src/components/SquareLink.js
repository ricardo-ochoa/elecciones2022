import React from 'react'

export const SquareLink = ({img, name, title, description}) => {
  return (
    <>
      <a href='https://www.google.com/' className='square_link'>
      <div className='squarelink' style={{ "backgroundImage": `url(${img})`}}>  
        <div className='info_squarelink'>
            <p className='title_squarelink'>{title}</p>
            <p className='description_squarelink'>{description}</p>        
        </div>
      </div>
      </a>
    </>
  )
}

import React, { useState } from 'react';

import { Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import '../assets/Logo.svg';


export const HeaderBlue = () => {

    const [show, setShow] = useState(false);

    return (
      <div className='header-container'>
          <div className='header animate__animated animate__fadeInDown' style={{ position: `${show ? "fixed": ""}`, overflow: "hidden" }}>
              
          <Link 
              to="/">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.79 139.97"  className="Logo">
              <defs>
                  <style type="text/css">{`
                  .d {fill: #3A3D4F;
                  }
                  `
                      }
                  </style>
              </defs>
                  <g id="a"/>
                  <g id="b">
                  <g id="c">
                      <g className={`${show ? "a": "b"}`}>
                      <path  d="M329.24,52.1c5.83-4.23,10.61-8.48,10.61-15.3,0-8.23-6.8-12.07-15.52-12.07-9.67,0-16.41,4.5-16.57,14.53h13.56c-.05-.58-.08-1.19-.08-1.74,0-3.07,1.02-4.42,2.87-4.42,1.71,0,2.46,1.3,2.46,3.07,0,3.92-3.2,6.91-6.68,10.17l-11.24,10.55v8.37h31.38v-9.12h-16.3l5.52-4.03Z"/>
                      <path d="M359.29,24.83c-9.92,0-16.46,5.17-16.46,16.27v7.96c0,11.66,6.38,17.02,16.46,17.02s16.44-5.36,16.44-17.02v-7.51c0-11.57-6.55-16.71-16.44-16.71Zm3.09,26.71c0,3.45-.64,5.8-3.09,5.8s-3.09-2.35-3.09-5.8v-12.46c0-3.34,.69-5.52,3.09-5.52s3.09,2.18,3.09,5.52v12.46Z"/>
                      <path d="M117.98,61.53l2.79,5.76h13.87l-5.41-6.47c6.57-2.01,10.72-7.17,10.72-15.88v-4.2c0-11.73-7.53-16.69-17.9-16.69s-17.9,5.11-17.9,16.69v4.2c0,10.02,5.49,15.33,13.82,16.59Zm-.86-21.87c0-4.05,1.16-7.3,4.93-7.3s4.93,3.25,4.93,7.3v6.52c0,4.05-1.16,7.32-4.93,7.32s-4.93-3.27-4.93-7.32v-6.52Z"/>
                      <path d="M146.62,61.56c3.35,0,5.86-2.49,5.86-5.76s-2.52-5.69-5.86-5.69-5.89,2.44-5.89,5.69,2.49,5.76,5.89,5.76Z"/>
                      <path d="M174.76,47.36h2.01c3,0,4.46,1.11,4.46,3.6v10.02h12.18v-9.74c0-4.91-2.27-6.52-7.22-7.42,3.9-1.06,7.15-3.65,7.15-9.29,0-6.62-4.46-9.64-14.09-9.64h-16.61V60.98h12.13v-13.62Zm0-15.08h2.19c2.79,0,4.38,1.03,4.38,3.75,0,2.99-1.74,4.2-4.51,4.2h-2.06v-7.95Z"/>
                      <path d="M213.67,61.81c10.57,0,17.9-5.29,17.9-16.86v-4.2c0-11.73-7.53-16.69-17.9-16.69s-17.9,5.11-17.9,16.69v4.2c0,11.58,7.32,16.86,17.9,16.86Zm-4.93-22.15c0-4.05,1.16-7.3,4.93-7.3s4.93,3.25,4.93,7.3v6.52c0,4.05-1.16,7.32-4.93,7.32s-4.93-3.27-4.93-7.32v-6.52Z"/>
                      <path d="M251.63,24.06c-10.37,0-17.89,5.11-17.89,16.69v4.2c0,11.58,7.32,16.86,17.89,16.86s17.9-5.29,17.9-16.86v-4.2c0-11.73-7.53-16.69-17.9-16.69Zm4.93,22.12c0,4.05-1.16,7.32-4.93,7.32s-4.93-3.27-4.93-7.32v-6.52c0-4.05,1.16-7.3,4.93-7.3s4.93,3.25,4.93,7.3v6.52Z"/>
                      <polygon points="123.46 104.02 118.44 70.39 102.61 70.39 112.07 115.63 134.6 115.63 144.09 70.39 128.48 70.39 123.46 104.02"/>
                      <path d="M166.8,69.35c-13,0-22.43,6.4-22.43,20.92v5.27c0,14.51,9.18,21.14,22.43,21.14s22.43-6.62,22.43-21.14v-5.27c0-14.7-9.43-20.92-22.43-20.92Zm6.18,27.73c0,5.08-1.45,9.18-6.18,9.18s-6.18-4.1-6.18-9.18v-8.17c0-5.08,1.45-9.15,6.18-9.15s6.18,4.07,6.18,9.15v8.17Z"/>
                      <polygon points="227.34 70.39 190.08 70.39 190.08 81.85 201.13 81.85 201.13 115.63 216.33 115.63 216.33 81.85 227.34 81.85 227.34 70.39"/>
                      <path d="M235.23,70.39l-11.83,45.24h15.65l1.67-8.11h10.51l1.67,8.11h15.87l-11.89-45.24h-21.64Zm7.6,26.47l3.19-15.9,3.19,15.9h-6.37Z"/>
                      <path d="M329.24,101.42c5.83-4.23,10.61-8.48,10.61-15.3,0-8.23-6.8-12.07-15.52-12.07-9.67,0-16.41,4.5-16.57,14.53h13.56c-.05-.58-.08-1.19-.08-1.74,0-3.07,1.02-4.42,2.87-4.42,1.71,0,2.46,1.3,2.46,3.07,0,3.92-3.2,6.91-6.68,10.17l-11.24,10.55v8.37h31.38v-9.12h-16.3l5.52-4.03Z"/>
                      <path d="M363.6,101.42c5.83-4.23,10.61-8.48,10.61-15.3,0-8.23-6.8-12.07-15.52-12.07-9.67,0-16.41,4.5-16.57,14.53h13.56c-.05-.58-.08-1.19-.08-1.74,0-3.07,1.02-4.42,2.87-4.42,1.71,0,2.46,1.3,2.46,3.07,0,3.92-3.2,6.91-6.68,10.17l-11.24,10.55v8.37h31.38v-9.12h-16.3l5.52-4.03Z"/>
                      <rect x="287.75" y="16.04" width="4.32" height="111.78"/>
                      <path d="M88.22,29.64h-15.39l-3.15,22.41h-15.14l3.15-22.41h-15.39l-3.15,22.41h-13.21l-1.82,13.21h13.21l-2.18,13.69h-12.96l-1.82,13.21h13.21l-3.15,22.41h15.39l3.15-22.41h15.14l-3.15,22.41h15.39l3.15-22.41h11.99l1.82-13.21h-11.99l1.82-13.69h12.12l1.82-13.21h-11.99l3.15-22.41Zm-22.29,49.31h-15.39l2.18-13.69h15.02l-1.82,13.69Z"/>
                      <path d="M384.16,0H16.63C7.46,0,0,7.46,0,16.63V123.34c0,9.17,7.46,16.63,16.63,16.63H384.16c9.17,0,16.63-7.46,16.63-16.63V16.63c0-9.17-7.46-16.63-16.63-16.63Zm11.32,123.34c0,6.24-5.08,11.32-11.32,11.32H16.63c-6.24,0-11.32-5.08-11.32-11.32V16.63c0-6.24,5.08-11.32,11.32-11.32H384.16c6.24,0,11.32,5.08,11.32,11.32V123.34Z"/>
                      </g>
                  </g>
                  </g>
              </svg>
          </Link>
              
              <div 
              onClick={() => setShow(true)}
              className='Menu-icon'  style={{ display: `${show ? "none": ""}` }}>

                  <p style={{ color: "#3A3D4F"}} >Men??</p>
                  
                  <svg  version="1.0" encoding="UTF-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 37.08" style={{width:"30px"}}>
                      <defs>
                          <style type="text/css">{
                              `
                              .b{fill:#3A3D4F;}
                              `
                          }</style></defs>
                          <g id="a"/><g id="b"><g id="c">
                          <g><rect className="b" width="100" height="5"/><rect className="b" y="32.08" width="100" height="5"/>
                          </g></g></g>
                  </svg>
              </div>
  
              <div 
              onClick={() => setShow(false)}
              className='Menu-icon-close animate__animated animate__flipInX' style={{ display: `${!show ? "none": ""}` }} >
                  <svg version="1.0" encoding="UTF-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.25 74.25" style={{width:"30px"}}>
                  <defs>
                          <style type="text/css">{
                              `
                              .a{fill:#f2f2f2;}
                              `
                          }</style></defs>
                  <g id="a"/><g id="b"><g id="c"><g><rect className="a" x="-12.88" y="34.62" width="100" height="5" transform="translate(-15.38 37.12) rotate(-45)"/>
                  <rect className="a" x="34.62" y="-12.88" width="5" height="100" transform="translate(-15.38 37.12) rotate(-45)"/></g></g></g></svg>
              </div>
          </div>
  
          { show ? 
  
          <div className='menu header animate__animated animate__fadeInDown'>
              <ul className='menu-list '>
              <HashLink 
                  to="/" smooth
                  onClick={() => setShow(false)}
              ><li  className='animate__animated animate__flipInX animate__delay-1s	1s'>Inicio</li></HashLink >
              
  
              <HashLink 
                  
                  to="/#candidatos" smooth
                  onClick={() => setShow(false)}
              ><li className='animate__animated animate__flipInX animate__delay-1s	1s'>Candidatos a gobernaci??n</li></HashLink >
  
  
              <Link 
              
                  to="/distritos"
                  onClick={() => setShow(false)}
              ><li className='animate__animated animate__flipInX animate__delay-1s	1s'>Distritos</li></Link>
              </ul>
  
              <div className='text-decoration animate__animated animate__backInUp animate__delay-1s	1s'>
                  <p>MEN??</p>
              </div>
  
          </div>
  
          : "" }
  
          
      </div>
    )
}

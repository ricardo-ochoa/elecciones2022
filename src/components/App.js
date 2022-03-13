import React from 'react'
import bg from '../assets/bg.jpg'
import imagemain from '../assets/image_main.png'
import { MainHeader } from './MainHeader';
import { Partidos } from './Partidos';

export const App = () => {

    const canvas = document.getElementById('canvas');



  return (
    <div>
    
    <MainHeader />
    <Partidos />
    <Partidos />

    </div>
  )
}

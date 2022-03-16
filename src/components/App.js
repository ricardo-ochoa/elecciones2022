import React from 'react';
import bg from '../assets/bg.jpg'
import imagemain from '../assets/image_main.png'

import { Coaliciones } from './Coaliciones';
import { Gobernador } from './Gobernador';

import { MainHeader } from './MainHeader';
import { Partidos } from './Partidos';


export const App = () => {

  return (
    <div>
    <MainHeader />
    <Partidos />
    <Coaliciones />
    <Gobernador />


    </div>
  )
}
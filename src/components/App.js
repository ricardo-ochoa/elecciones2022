import React from 'react';

import { Coaliciones } from './Coaliciones';
import { Diputados } from './Diputados';
import { Gobernador } from './Gobernador';
import { MainHeader } from './MainHeader';
import { Partidos } from './Partidos';
import { Qrvota } from './Qrvota';
import { Resultados } from './Resultados';


export const App = () => {

  return (
    <div>
    <MainHeader />
    <Qrvota />
    <Partidos />
    <Coaliciones />
    <Gobernador />
    <hr></hr>
    <Diputados />
    <hr></hr>
    <Resultados />
    </div>
  )
}
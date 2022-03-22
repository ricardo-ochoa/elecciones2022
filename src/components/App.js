import React from 'react';

import { Coaliciones } from './Coaliciones';
import { Diputados } from './Diputados';
import { Footer } from './Footer';
import { Gobernador } from './Gobernador';
import { Header } from './Header';
import { MainHeader } from './MainHeader';
import { Partidos } from './Partidos';
import { Qrvota } from './Qrvota';
import { Resultados } from './Resultados';


export const App = () => {

  return (
    <div>
    <Header />
    <MainHeader />
    <Qrvota />
    <Partidos />
    <Coaliciones />
    <Gobernador />
    <hr></hr>
    <Diputados />
    <hr></hr>
    <Resultados />
    <Footer />
    </div>
  )
}
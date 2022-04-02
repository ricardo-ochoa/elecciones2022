import React, {useEffect, useState} from 'react';

import { Coaliciones } from './Coaliciones';
import { Diputados } from './Diputados';
import { Footer } from './Footer';
import { Gobernador } from './Gobernador';
import { Header } from './Header';
import { MainHeader } from './MainHeader';
import { Menu } from './Menu';
import { Partidos } from './Partidos';
import { Qrvota } from './Qrvota';
import { Resultados } from './Resultados';

import parseFile from "../info/api"


export const App = () => {

  const [person, setPerson] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [diputados, setdiputados] = useState([]);
  
  async function fetchParsedData() {
      const parsedData = await parseFile()
      setPerson(parsedData)
  }

  useEffect(() => { 
      fetchParsedData()
  }, [])

  useEffect(() => { 
      const filtered = person.filter((element) => (
          element.puesto === "Gobernación"
      ));
      const diputados = person.filter((element) => (
        element.puesto === "Diputado"
    ));
      setFiltered(filtered)
      setdiputados(diputados)

  }, [person])

  return (
    <div>
    <Header />
    <MainHeader />
    <Qrvota />
    <Partidos />
    <Coaliciones />
    <Gobernador candidatos={filtered} />
    <hr></hr>
    <Diputados candidatos={diputados} />
    <hr></hr>
    <Resultados />
    <Footer />
    </div>
  )
}
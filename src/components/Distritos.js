import React, {useState, useEffect} from 'react'
import { Banner } from './Banner'
import { DistritosBtn } from './DistritosBtn'
import { Footer } from './Footer'
import { Header } from './Header'

import parseFile from "../info/api"
import { InfoDistrito } from './InfoDistrito'

export const Distritos = () => {

  const [person, setPerson] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filteredDiputados, setFilteredDiputados] = useState([]);

    
    async function fetchParsedData() {
        const parsedData = await parseFile()
        setPerson(parsedData)
    }

    useEffect(() => { 
        fetchParsedData()
    }, [])

    useEffect(() => { 
        const filtered = person.filter((element) => (
            element.puesto === "Diputado"
        ));
        setFiltered(filtered)
    }, [person])

  return (
    <div>
      <Header />
      <Banner />
      <div className='distritos_filters'>
          <h3>Distritos</h3>

      <div className='lista'>

          <DistritosBtn data={filtered} />


      </div>

      </div>



      <Footer />
    </div>
  )
}

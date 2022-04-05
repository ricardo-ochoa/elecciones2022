import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { Footer } from './Footer';
import { HeaderBlue } from './HeaderBlue';
import image from '../../src/assets/CANDIDATO.png'

import parseFile from "../info/api"
import parseExperience from "../info/api_experience"

export const Candidato = () => {
  const { id } = useParams();

  const [person, setPerson] = useState([]);
  const [experiece, setExperiece] = useState([]);

  const [filtered, setFiltered] = useState([]);
  const [filteredExperience, setFilteredExperience] = useState([]);


  async function fetchParsedData() {
    const parsedData = await parseFile()
    setPerson(parsedData)
  }

  async function fetchParsedDataExperience() {    
    const experienceData = await parseExperience()
    setExperiece(experienceData)
  }

  useEffect(() => { 
    fetchParsedData()
    fetchParsedDataExperience()
  }, [])

  useEffect(() => { 
    const filtered = person.filter((element) => (
        element.id === id 
    ));
    console.log(filtered)
    setFiltered(filtered)
  }, [person])

  useEffect(() => { 

    const filteredExperience = experiece.filter((element) => (
      element.nombre === id 
    ));
    setFilteredExperience(filteredExperience)
    
  }, [experiece])

  
  return (
    <>
    <HeaderBlue />
    
      {
        filtered.map((people) => {
          return(
              <div key={people.id} className="profile_container">
                <img

                  className='image-profile'
                  src={people.img}
                  alt={people.name}
                />

                <img className='candidato_text_image'

                  src={image}
                  alt={people.puesto}
                />

                <div className='info_name'>
                  <p className='puesto'>Candidato a {people.puesto}</p>
                  <p className='name'>{people.name}</p>
                  <p className='partido'>{people.partido}</p>
                </div>

                <div className='quien_es'>
                  <p className='subtitle2'>Información:</p>
                  <ul>
                    <li><p><span className='puesto'>Edad:</span> {people.edad}</p></li>
                    <li><p><span className='puesto'>Lugar de nacimiento:</span> {people.nacimiento}</p></li>
                    <li><p><span className='puesto'>Área de desempeño:</span> {people.desempeno}</p></li>
                    <li><p><span className='puesto'>Estudios:</span> {people.estudios}</p></li>
                    <li><p><span className='puesto'>Redes sociales:</span></p>
                        <p className='redes'><a style={{display: `${people.facebook}` === "" ? "none" : ""}} target="_blank" href={people.facebook}> Facebook</a>
                        <a style={{display: `${people.instagram}` === "" ? "none" : ""}} target="_blank" href={people.instagram}> Instagram</a>
                        <a style={{display: `${people.twitter}` === "" ? "none" : ""}} target="_blank" href={people.twitter}>Twitter</a> </p>
                    </li>
                        
                  </ul>
                </div>

                <div className='experiencia'>
                  <p  style={{display: `${filteredExperience}` === "" ? "none" : ""}} className='subtitle2'>Experiencia:</p>
                    {
                      filteredExperience.map((people) => {
                        return(
                          <div key={people.id}>
                            <ul>
                              <li><p><span className='puesto'>{people.year}</span></p>
                                <p>{people.description} </p> 
                              </li>                      
                            </ul>
                          </div>
                        )
                      })
                    }
                </div>
              </div>
          )
        })
      }

    <Footer />
    </>

  )
}

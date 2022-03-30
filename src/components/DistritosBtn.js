import React, {useState, useEffect} from 'react'
import { InfoDistrito } from './InfoDistrito'
import parseFile from "../info/api"

export const DistritosBtn = ({data}) => {

  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("1");

  const toggleActive = (number) => {
    setActive(number);
  }  

  useEffect(() => {
    setFiltered(getInfoByDistrit(active))
  }, [active])
  

  const getInfoByDistrit = ( active ) => {
    return data.filter( people => people.distrito === active);
  }
    
  return (
    <div>
    <div className='distritos-list'>
        <div className={active === "1" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("1")}> 1 </div>
        
        <div className={active === "2" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("2")}> 2 </div>

        <div className={active === "3" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("3")}> 3 </div>
        
        <div className={active === "4" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("4")}> 4 </div>
        
        <div className={active === "5" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("5")}> 5 </div>

        <div className={active === "6" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("6")}> 6 </div>
        
        <div className={active === "7" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("7")}> 7 </div>

        <div className={active === "8" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("8")}> 8 </div>
        
        <div className={active === "9" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("9")}> 9 </div>
        
        <div className={active === "10" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("10")}> 10 </div>

        <div className={active === "11" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("11")}> 11 </div>
        
        <div className={active === "12" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("12")}> 12 </div>

        <div className={active === "13" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("13")}> 13 </div>
        
        <div className={active === "14" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("14")}> 14 </div>
        
        <div className={active === "15" ? 'distrito-btn distrito-btn-active' : 'distrito-btn'}
          onClick={()=>toggleActive("15")}> 15 </div>
    </div>
      <div>          
          {
                  filtered.map((candidato) => {
                            return(
                                <InfoDistrito
                                key={candidato.id} 
                                img={candidato.img}
                                name={candidato.name}
                                distrito={candidato.distrito}
                                coalicion={candidato.coalicion}
                                />
                            );
                    })                

          
          }
      </div>
      
    </div>
  )
}

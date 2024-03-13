import { useContext, useState } from 'react';
import './LoginBusqueda.css'
import { pokeApi } from '../../helpers/pokeApi';
import Logo from '../../../Imagen_Logo/loadingPokeball2.gif'
import { useNavigate } from 'react-router-dom';
import {PokeContext} from '../../context/PokeContext';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function LoginBusqueda () {
    const navigate = useNavigate()
    const {state , dispatcher} = useContext(PokeContext)
    const [pokeText, setPokeText] = useState("")
    const [errorBusqueda, setErrorBusqueda] = useState(null)

    const location = useLocation();

    
   
    useEffect(() => {
        console.log("location", location.pathname);
    }, [location])

    if (location.pathname !== '/') {
        return null
       }

    const onSearch = async (event) => { 
      event && event.preventDefault()
      
      const inputABuscar = event ? event.target[0].value : pokeText
      if (!inputABuscar) {
        return null
      }
      console.log(inputABuscar)
      try {
        const res = await pokeApi(inputABuscar)
        
        dispatcher("setDataPoke", res)
        console.log('data pokeee', state.DataPoke)
        navigate("/details")
      } catch (error) {
        setErrorBusqueda(error) 
          return 
      }
    }
    
    
    
    return (
      <div >
        <div className='cont-pokeball'>
          <img className='img-pokeball' src={Logo} alt="Logo img" />
        </div>
         <form className='form-container' onSubmit={(event) => onSearch(event)}> 
            <input onChange={(event) => setPokeText(event.target.value)} type="text"  />
            <label> Busca tu poke...</label>
            <button  type={"button"} onClick={() => onSearch()} className='nes-btn is-success' >Buscar </button> 
         </form>
         <span className='nes-text is-error'></span>
      </div>
    )
}
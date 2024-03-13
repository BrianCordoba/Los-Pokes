import { useContext, useState } from "react"
import {useEffect} from "react"
import { PokeContext } from "../context/PokeContext"

const Evolucion = ({url}) => { 
    const [evolution, setevolution] = useState("")
    // crear otro state con la pasada!!!
    const {state , dispatcher} = useContext(PokeContext)
    const {DataPoke: data} = state

    //BUSCAR LOCAL STORAGE!!!!!!!!!!!!!

    const evolPoke = () => { 
         
            fetch(url)
            .then((res) => res.json())
            .then((res) =>{
                // console.log( "respuesta evolucion", res)
                fetch(res.evolution_chain.url)
                .then((res) => res.json())
                .then((res) => {
                    // encadenado opcional "?." 
                    let evolMedia = res?.chain?.evolves_to[0]?.species,
                        evolUltima = res.chain?.evolves_to[0]?.evolves_to[0]?.species,
                        evolOriginal = res.chain.species
                        let nextPoke
                    if (data.species.name === evolOriginal.name){
                        nextPoke = evolMedia
                    } else if (data.species.name === evolMedia.name) {
                       nextPoke = evolUltima
                    } else {
                        nextPoke = null
                    }
                    console.log ( "respuesta evolucion 2", nextPoke)
                    setevolution(nextPoke)
               
                })
                .catch(() => alert("no datos.."));
            })
       
    }
        

     const botonPoke = () => { 
        fetch(`https://pokeapi.co/api/v2/pokemon/${evolution.name.toLowerCase()}`)
        .then(res => res.json()) 
        .then(pokemon => {
            // console.log('respeusta de la respuesta' , pokemon)
            dispatcher("setDataPoke", pokemon)
    })
    .catch(() => console.warn("no datos.."));
     }


     useEffect(() => {
        console.log(url)
       if (url) {
            evolPoke()
       }
      // eslint-disable-next-line
      }, [url])

      return (
        <div>
            {!evolution ? <span>Sin evoluciones</span> 
                        : <button className="nes-btn is-success"  onClick={() => botonPoke()}  >Evoluciona a {evolution.name}... </button> 
            }
        </div>
      )
 }

 export default Evolucion;
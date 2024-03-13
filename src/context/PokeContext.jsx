// import { useState } from "react";
// import { createContext } from "react";

//  const PokeContext = createContext()

//  const PokeProvider = ({children}) => {
    
//     const [DataPoke, setDataPoke] = useState(null);
//     const [inputBusqueda, setInputBusqueda] = useState("")
   
    
//      const data = {DataPoke, setDataPoke,inputBusqueda, setInputBusqueda }



//     return (
//             <PokeContext.Provider value={data}>{children}</PokeContext.Provider>
//            )
//  }
// export {PokeProvider}

//  export default PokeContext;

import { createContext, useReducer } from 'react'

export const PokeContext = createContext()

function contextReducer(state, action) {
    // Acá se definen las diferentes acciones para actualizar el estado
    switch (action.type) {
        case 'setDataPoke': {
          console.log('action', action)
          console.log( "state", state);
            return { ...state, DataPoke: action.payload }
        }
        case 'setInputBusqueda': {
            return { ...state, InputBusqueda: [...state.chat, action.payload] }
        }
        default: {
            throw new Error(`No existe esta accion: ${ action.type } `)
        }
    }
    
}

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(
        contextReducer,
        // Acá se define el estado inicial
        {
            DataPoke: null,
            InputBusqueda: ''
        }
    )

    // Función para simplificar el uso del dispatch
    // Ejemplo uso: dispatcher('setDataPoke', data)
    const dispatcher = (type, payload) => {
      console.log('type', type, 'payload', payload)
        dispatch({ type, payload })
    }
    
    const value = { state, dispatcher }

    return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>
}

export { ContextProvider }
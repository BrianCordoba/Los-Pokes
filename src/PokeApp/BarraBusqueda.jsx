import './BarraBusqueda.css'

export default function BarraBusqueda () {
    return (
        <div className='containerInput'> 
            <input type="text" placeholder='Ingresar pokemon ' className='input' />
            <button onClick={() => alert("Buscando tu Pokemon. . .")}>Buscar </button>
        </div>
    )
}
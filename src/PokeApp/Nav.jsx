
import BarraBusqueda from './BarraBusqueda.jsx';
import Logo from '../ImagenDeLogo.png'
import './Nav.css'

export default function Nav () {
    return (
    <div id="divNav">  
        <div >
            <img src={Logo} className="img"/>
            <span className="ltrSpam">Poke APi</span>
        </div>

        <div >
            <BarraBusqueda />
        </div>
    </div>  
    )
}

import './PokeCard.css';
import Picachu from '../pikachu.gif'



export default function PokeCard ({tipo}) {
    console.log(tipo, "aca")
    return (
    <article className={`card ${tipo}`.toLocaleLowerCase()}>
        <div className="card-body">
            <h3 > Pikachu </h3>
            <img src={Picachu} className='img-pika'></img>
            <h3 >Tipo: {tipo}</h3>
            
        </div>
    </article>
    )
}

import { useContext, useState } from "react";
import "./PokeCard2.css";
import CounterPoke from "../CounterPoke/CounterPoke.jsx";
import StatsPokes from "../Stats-Pokes.jsx";
import Dark from "../../assets/Iconos/Pokémon_Dark_Type_Icon.svg";
import Electric from "../../assets/Iconos/Pokémon_Electric_Type_Icon.svg";
import Fairy from "../../assets/Iconos/Pokémon_Fairy_Type_Icon.svg";
import Fighting from "../../assets/Iconos/Pokémon_Fighting_Type_Icon.svg";
import Ground from "../../assets/Iconos/Pokémon_Ground_Type_Icon.svg";
import Ice from "../../assets/Iconos/Pokémon_Ice_Type_Icon.svg";
import Normal from "../../assets/Iconos/Pokémon_Normal_Type_Icon.svg";
import Poison from "../../assets/Iconos/Pokémon_Poison_Type_Icon.svg";
import Psychic from "../../assets/Iconos/Pokémon_Psychic_Type_Icon.svg";
import Rock from "../../assets/Iconos/Pokémon_Rock_Type_Icon.svg";
import Steel from "../../assets/Iconos/Pokémon_Steel_Type_Icon.svg";
import Water from "../../assets/Iconos/Pokémon_Water_Type_Icon.svg";
import Fire from "../../assets/Iconos/Fuego2.webp";
import Flying from "../../assets/Iconos/Fliying.webp";
import Ghost from "../../assets/Iconos/Ghost.webp";
import Dragon from "../../assets/Iconos/Dragon.webp";
import Grass from "../../assets/Iconos/Grass.webp";
import Bug from "../../assets/Iconos/Bug.webp";
import Evolucion from "../Evolucion.jsx";
import { PokeContext } from "../../context/PokeContext.jsx";
import LoginBusqueda from "../LoguinBusqueda/LoginBusqueda.jsx";

export default function PokeCard() {
  const { state, dispatcher } = useContext(PokeContext);

  const { DataPoke: data } = state;

  console.log("datapoke", data);

  const loguito = (tipo) => {
    if (tipo === "bug") {
      return <img src={Bug} />;
    }
    if (tipo === "grass") {
      return <img src={Grass} />;
    }
    if (tipo === "dragon") {
      return <img src={Dragon} />;
    }
    if (tipo === "ghost") {
      return <img src={Ghost} />;
    }
    if (tipo === "flying") {
      return <img src={Flying} />;
    }
    if (tipo === "fire") {
      return <img src={Fire} />;
    }
    if (tipo === "dark") {
      return <img src={Dark} />;
    }
    if (tipo === "electric") {
      return <img src={Electric} />;
    }
    if (tipo === "fairy") {
      return <img src={Fairy} />;
    }
    if (tipo === "fighting") {
      return <img src={Fighting} />;
    }
    if (tipo === "ground") {
      return <img src={Ground} />;
    }
    if (tipo === "ice") {
      return <img src={Ice} />;
    }
    if (tipo === "normal") {
      return <img src={Normal} />;
    }
    if (tipo === "poison") {
      return <img src={Poison} />;
    }
    if (tipo === "psychic") {
      return <img src={Psychic} />;
    }
    if (tipo === "rock") {
      return <img src={Rock} />;
    }
    if (tipo === "steel") {
      return <img src={Steel} />;
    }
    return <img src={Water} />;
  };

  const [shinySi, setshinySi] = useState(false);

  const imagenFrente = data.sprites.front_default,
    imagenAtras = data.sprites.other.showdown.front_default;

  const imgShiny = data.sprites.front_shiny,
    hoverShiny = data.sprites.other.showdown.front_shiny;

  const cambiarSh = () => {
    setshinySi(!shinySi);
  };

  return (
    <>
      <LoginBusqueda />
      <div className="div-container">
        <div className="img-boton">
          <article className="pad-poke">
            <img src={shinySi ? imgShiny : imagenFrente}></img>
            <img src={shinySi ? hoverShiny : imagenAtras}></img>
          </article>
          <button className="nes-btn is-warning" onClick={cambiarSh}>
            {!shinySi ? "Shiny" : "Normal"}
          </button>
        </div>
        <div className="nes-container is-dark with-title mayus-1ra datos-poke">
          <h1 className="title">{data.species.name}</h1>
          <div className="contenedor-logo">
            Tipo: {data.types.map((tipo) => loguito(tipo.type.name))}
          </div>
          <p>
            Ataques: {data.abilities.map((poder) => poder.ability.name + " ")}
          </p>
          <CounterPoke url={data.types[0].type.url} />
          <StatsPokes data={data} />
          <Evolucion url={data.species.url} setPokemones={null} data={data} />
        </div>
      </div>
    </>
  );
}

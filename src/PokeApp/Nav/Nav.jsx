// import Logo from '../ImagenDeLogo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useContext, useEffect, useState } from "react";
import { pokeApi } from "../../helpers/pokeApi";
import { PokeContext } from "../../context/PokeContext";

export default function Nav() {
  const location = useLocation();

  const { state, dispatcher } = useContext(PokeContext);
  const [pokeText, setPokeText] = useState("");
  const [errorBusqueda, setErrorBusqueda] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {}, [location]);

  if (location.pathname === "/") {
    return null;
  }

  const onSearch = async (event) => {
    event && event.preventDefault();

    const inputABuscar = event ? event.target[0].value : pokeText;
    if (!inputABuscar) {
      return null;
    }
    console.log(inputABuscar);
    try {
      const res = await pokeApi(inputABuscar);

      dispatcher("setDataPoke", res);
      console.log("data pokeee", state.DataPoke);
      navigate("/details");
    } catch (error) {
      setErrorBusqueda(error);
      return;
    }
  };

  return (
    <nav className="navNav">
      <div className="box-contain">
        <a href="/" className="nes-badge">
          <span className="is-primary">Back</span>
        </a>
        <div>
          <h4 className="ltrSpam">Poke Appi</h4>
        </div>
        <form onSubmit={(event) => onSearch(event)} className="cont-input-nav">
          <input
            onChange={(event) => setPokeText(event.target.value)}
            type="text"
            placeholder="Busca tu poke"
          />
          <a href="#">
            <i
              type={"button"}
              onClick={() => onSearch()}
              className="fas nes-pokeball"
            ></i>
          </a>
        </form>
        <div className="ltrAbout">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

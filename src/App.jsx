import "./App.css";
import Nav from "./PokeApp/Nav/Nav.jsx";
import PokeCard from "./PokeApp/PokeCard/PokeCard.jsx";
import LoginBusqueda from "./PokeApp/LoguinBusqueda/LoginBusqueda.jsx";
import { ContextProvider } from "./context/PokeContext.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./PokeApp/About/About.jsx";



// const listaDeRutas = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginBusqueda />
//   },
//   {
//     path: "/details",
//     element: <PokeCard />
//   },
// ]);

function App() {
  return (
    <>
      

      <ContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<LoginBusqueda />} />
          <Route path="/details" element={<PokeCard /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;

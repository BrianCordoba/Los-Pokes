import { useEffect, useState } from "react";
 

const CounterPoke = ({url}) => {
  const [datosPokes, setDatosPokes] = useState(false);

  const counters = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDatosPokes(res.damage_relations);
      })
      .catch(() => alert("no datos.."));
  };
  useEffect(() => {
    console.log(url)
   if (url) {
        counters()
   }
  // eslint-disable-next-line
  }, [url])
  

  return (
    <div className="mayus-1ra">
      {!datosPokes ? <h2 >cargando...</h2> :  <>
          <p> Debil contra: <span >{datosPokes.double_damage_from.map(data => data.name + " ")}</span></p>
          <p> Fuerte contra: <span >{datosPokes.double_damage_to.map(data => data.name + " ")}</span> </p>
          <p> Inmune a: <span >{datosPokes.no_damage_from.map(data => data.name + " ")}</span></p>
      </>
      }
    </div>
  );
};

export default CounterPoke;

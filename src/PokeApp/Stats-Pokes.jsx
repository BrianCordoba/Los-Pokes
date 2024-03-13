const StatsPokes = ({data}) => { 
 const colorBarrita = (num) => { 
    if (num >= 150) {
        return "is-perfect"
    }
    if (num >= 100) {
        return "is-primary"
    }
    if (num >= 75 && num < 100) {
        return "is-success"
    }
    if (num >= 50 && num < 75) {
        return "is-warning"
    }
   return "is-error"
  }

    return (
        <div >
            <div>
                {data.stats.map((dato, i)=> 
                    ( <div key={i}>
                    <span> {dato.stat.name} : {dato.base_stat} </span>
                    <progress className={`nes-progress ${colorBarrita(dato.base_stat)}`} value={dato.base_stat} max="150"></progress>
                    </div> ) )}
            </div>
        </div>
        
    )
 }

 export default StatsPokes;
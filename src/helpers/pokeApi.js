
export const pokeApi = async (pokeText) => {
     return await fetch ( `https://pokeapi.co/api/v2/pokemon/${pokeText.toLowerCase().replaceAll(" ", "-")}`)
    .then(res => res.json()) 
    .then(pokemon => {
        console.log(pokemon)
      return pokemon
    })
    .catch((error) => {
        console.warn(error)
        alert("escribi bien conchetumare")
        throw error
    })

  }


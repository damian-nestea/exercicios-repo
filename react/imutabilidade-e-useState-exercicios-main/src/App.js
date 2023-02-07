import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  const [pokemon , setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  });

  const pichuEvolved = {
      name: "Pikachu",
      type: "Electric",
      evolved: true,
      weight: 6,
      color: 'yellow',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png',
      id: 1
    }
    
    const [pokemon1 , setPokemon1] = useState({
      name: "Bulbasaur",
      type: "Grass-Poison",
      evolved: false,
      weight: 6.9,
      color: 'green',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png',
      id: 2
    });
  
    const bulbasaurEvolved = {
        name: "Ivysaur",
        type: "Grass-Poison",
        evolved: true,
        weight: 13,
        color: 'green',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/250px-0002Ivysaur.png',
        id: 4
      }


  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        nome = {pokemon.name}
        type = {pokemon.type}
        evolved = {pokemon.evolved}
        weight = {pokemon.weight}
        color = {pokemon.color}
        image = {pokemon.image}
        id = {pokemon.id}
        setPokemon = {setPokemon}
        pokemonEvolved = {pichuEvolved}
      />
      <PokemonCard
        nome = {pokemon1.name}
        type = {pokemon1.type}
        evolved = {pokemon1.evolved}
        weight = {pokemon1.weight}
        color = {pokemon1.color}
        image = {pokemon1.image}
        id = {pokemon1.id}
        setPokemon = {setPokemon1}
        pokemonEvolved = {bulbasaurEvolved}
      />
    </FlexContainer>
  </>
    
  );
}

export default App;

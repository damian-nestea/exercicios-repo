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
  const [pokemon , setPokemon] = useState([
    {
      name: "Pichu",
      type: "Electric",
      evolved: false,
      weight: 2,
      color: 'yellow',
      image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
      id: 0
   },
   {
    name: "Bulbasaur",
    type: "Grass-Poison",
    evolved: false,
    weight: 2,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png',
    id: 1
  },
  {
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 8.5,
    color: 'orange',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png',
    id: 2
  },
  {
    name: "Psyduck",
    type: "Water",
    evolved: false,
    weight: 19.6,
    color: 'lightblue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/3f/0054Psyduck.png/250px-0054Psyduck.png',
    id: 3
  },
]);

const pokemonEvoluido =[
  {
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
 },
 {
  name: "Ivysaur",
  type: "Grass-Poison",
  evolved: true,
  weight: 6,
  color: 'green',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png',
  id: 1
},
{
  name: "Charmeleon",
  type: "Fire",
  evolved: true,
  weight: 12.5,
  color: 'orange',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png',
  id: 2
},
{
  name: "Golduck",
  type: "Water",
  evolved: true,
  weight: 29.6,
  color: 'lightblue',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/3/3f/0054Psyduck.png/250px-0054Psyduck.png',
  id: 3
}
];


  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemons = {pokemon} setPokemon = {setPokemon} pokemonEvoluido ={pokemonEvoluido}/>
    </FlexContainer>
  </>
    
  );
}

export default App;

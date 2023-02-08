import React from 'react'
import { Titulo, CardContainer ,Card, PokemonName, PokemonType, EvolveButton , Imagem} from './styles'



const PokemonCard = ({pokemons, setPokemon, pokemonEvoluido}) => {

    const evoluirPokemon = (id,evoluido) => {
      if(!evoluido){
        const pokemonAEvoluir = pokemonEvoluido.find((pokemon)=>{
          return pokemon.id === id;
        })
        
        const pokemonEvolved = pokemons.map((item) =>{
          if(item.id === pokemonAEvoluir.id){
            return {
              ...item, name: pokemonAEvoluir.name, color: pokemonAEvoluir.color, image: pokemonAEvoluir.image, type: pokemonAEvoluir.type, weight: pokemonAEvoluir.weight, evolved: pokemonAEvoluir.evolved
            }
          }
          return item;
        })
        setPokemon(pokemonEvolved); 
      }else{
        alert("Pokemon já evoluído!");
      }
    }
    
  return (
    <CardContainer>
      <Titulo>POKEMONS</Titulo>
      {pokemons.map((pokemon) => (
      <Card key={pokemon.color} color={pokemon.color}>
          <Imagem key={pokemon.image} src={pokemon.image} alt={`Pokemon`}/>
          <PokemonName key={pokemon.name}>{pokemon.name}</PokemonName>
          <PokemonType key={pokemon.type}>{pokemon.type}</PokemonType>
          <p key={pokemon.weight}>{pokemon.weight}kg</p>

          <EvolveButton onClick={() => evoluirPokemon(pokemon.id,pokemon.evolved)}>Evoluir!</EvolveButton>
      </Card>
      ))}
    </CardContainer>
  )
}

export default PokemonCard
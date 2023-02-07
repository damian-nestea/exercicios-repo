import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton , Imagem} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
      props.setPokemon(props.pokemonEvolved);
    }
    
  return (
    <Card color={props.color}>
        <Imagem src={props.image} alt={`Pokemon`}/>
        <PokemonName>{props.nome}</PokemonName>
        <PokemonType>{props.type}</PokemonType>
        <p>{props.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>

    </Card>
  )
}

export default PokemonCard
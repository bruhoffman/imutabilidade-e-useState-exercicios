import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = (props) => {
  const { pokemons } = props;

  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evoluir");
  };

  return pokemons.map((pokemon) => {
    <Card color={pokemon.color}>
      <img src={pokemon.image} alt={`Pokemon`} />
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonType>{pokemon.type}</PokemonType>
      <p>{pokemon.weight}kg</p>
      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>;
  });
};

export default PokemonCard;

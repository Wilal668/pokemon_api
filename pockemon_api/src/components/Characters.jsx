import React, { useState, useEffect } from "react";
import Character from "./Character";
import Header from "./Header";
import Footer from "./Footer";

function Characters() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const pokemonPromises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        return Promise.all(pokemonPromises);
      })
      .then((pokemonData) => {
        setPokemons(pokemonData);
      })
      .catch((error) => {
        console.error("Error fetching pokemons:", error);
      });
  }, []);

  return (
    <div>
      <Header/>
      <div className="characters">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <Character
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types.map(type => type.type.name)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Characters;


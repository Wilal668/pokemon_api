import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div>
      <Header/>
      <div className='Homepage'>
      <div class="Homepage">
        <h1>Pokémon API</h1>
        <p>
          Explore the world of Pokémon through our comprehensive API. Discover Pokémon details, types, abilities, and much more!
        </p>
        <div class="features">
          <div class="feature">
            <h2>Pokémon Database</h2>
            <p>Access detailed information about all Pokémon, including stats, moves, and evolutions.</p>
          </div>
          <div class="feature">
            <h2>Type Advantages</h2>
            <p>Learn about Pokémon type advantages and build the perfect team.</p>
          </div>
          <div class="feature">
            <h2>Abilities & Moves</h2>
            <p>Discover Pokémon abilities and movesets to strategize effectively.</p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;


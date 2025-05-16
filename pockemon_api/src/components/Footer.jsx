import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()} Pokémon API App</p>
      <p>
        <a href="https://pokemon.com" target="_blank" rel="noopener noreferrer">
          Official Pokémon Website
        </a>
      </p>
    </footer>
  );
};

export default Footer;

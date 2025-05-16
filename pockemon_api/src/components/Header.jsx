import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='Header'>
            <NavLink to="/"><button className='btn'>Home</button></NavLink>
            <NavLink to="/Characters"><button className='btn'>Characters</button></NavLink>      
        </header>
    );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <header>
            <span>iRepair</span>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <Button>
                <NavLink to='/login' >Login</NavLink>
                </Button>
            </ul>
        </header>
    );
};

export default Navbar;
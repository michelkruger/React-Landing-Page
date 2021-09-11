import React from 'react';

import Logo from '../../assets/logo.png';
import './index.css';

const Navbar = () => {

    return(
        <navbar className="container-navbar">
            <img src={Logo } alt="nowne"/>

            <button className="button">
                FALE CONOSCO
            </button>
        </navbar>
    )
}

export default Navbar
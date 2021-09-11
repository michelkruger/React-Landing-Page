import React from 'react'

import Navbar from '../Navbar/index';
import Rings from '../../assets/rings.png';
import './index.css';

const Header = () => {

    return(
        <header className="container-header">
            <div className="container">
                <Navbar/>
                <div className="container-main-paragraph">
                    <p className="main-paragraph">
                        Transformar <span className="blue">negócios</span>,<br/> 
                        utilizando <span className="orange">tecnologia</span> e <br/> 
                        <span className="green">inovação</span> como aliados.
                    </p>
                    <img src={Rings}/>
                </div>
            </div>
        </header>
    )
}

export default Header
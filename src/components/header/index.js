import React from 'react';

import './style.scss'

import Logo from '../../images/MOVE.png';
import Search from '../../images/magnifying-glass.svg';
import Profile from '../../images/profile.svg';

export default function Header() {

    return (

        <header>

            {/* <div className="logoWrapper">

                <img src={Logo} alt="Movea logo" />

            </div> */}

            <nav>

                <ul className="navItens">

                    <li><span>Filmes</span></li>
                    <li><span>Séries</span></li>
                    <li><span>Filmes em cartaz</span></li>
                    <li><span>Shows</span></li>

                </ul>

            </nav>

        </header>

    )

}
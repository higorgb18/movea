import React from 'react';
import { useState, useEffect } from 'react';

import Search from '../../images/search.svg';

import './style.scss';

export default function ProfileBar() {

    const [displayProfileBar, setDisplayProfileBar] = useState(false);

    function changeBarWidth() {

        displayProfileBar ? setDisplayProfileBar(false) : setDisplayProfileBar(true);

        console.log(displayProfileBar)

    }

    return(
        

        <aside onClick={()=> changeBarWidth()} className={`profileSidebar ${displayProfileBar ? 'active' : ''}`}>

            <div className="profile">

                <div onClick={()=> changeBarWidth()} className="imgProfileWrapper">

                    <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10DA9/production/_123633096_cpiadejuliettefreireporlaraimperiano-2.jpg" alt="" />

                </div>

                <div className={`profileInfos ${displayProfileBar ? 'active' : ''}`}>

                    <h5>Higor Brandão</h5>
                    <span>higorb2000@gmail.com</span>

                </div>

            </div>

            <div className="searchBar">
                
                <img src={Search} alt="lupa de busca" />
                < input type="text" placeholder="Buscar" />

            </div>

            <ul className="list">

                <li>
                    <a className={displayProfileBar ? 'activeBtn' : ''} href="#">
                        <img src={Search} alt="lupa de busca" />
                        <span>Teste</span>
                    </a>
                </li>

            </ul>

        </aside>

    )

}
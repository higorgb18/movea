import React from 'react';
import { useState, useEffect } from 'react';

import './style.scss';

export default function ProfileBar() {

    const [displayProfileBar, setDisplayProfileBar] = useState(false);

    function changeBarWidth() {

        displayProfileBar ? setDisplayProfileBar(false) : setDisplayProfileBar(true);

        console.log(displayProfileBar)

    }

    return(

        <aside className={displayProfileBar ? 'profileSidebarActive' : 'profileSidebarDesactive'} >

            <div className="profile">

                <button onClick={()=> changeBarWidth()}>Clique agui vc clicaria??</button>

            </div>

            <div className="imgProfileWrapper">

                <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10DA9/production/_123633096_cpiadejuliettefreireporlaraimperiano-2.jpg" alt="" />

            </div>

        </aside>

    )

}
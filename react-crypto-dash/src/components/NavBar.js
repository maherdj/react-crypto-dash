import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavBar.css'
import Hamburger from './Hamburger';

function NavBar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return( 
        <div>
            <div className="navigation">
                <ul className="Menu-list">
                    <li>
                        <NavLink className="nav-link1" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link2" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link3" to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link4" to="/login">Login</NavLink>
                    </li>
                </ul>
                <div className="Hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
                
            </div>
            {/*
                TODO: CREATE SEPARATE STYLESHEET
            */}
            <style jsx>{`
                .navigation{
                    width: 100%;
                }

                .navigation ul{
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                    background-color: #526D82;
                    height: 20vh;
                    width: 10vw;
                    padding-top: 10px;
                    padding-left: 5px;
                    margin-left: -90px;
                    margin-top: 50px;
                    text-align: left;
                    position: fixed;
                    border-radius: 25px;
                }

               
            `} </style>
        </div>
    )
}

export default NavBar;
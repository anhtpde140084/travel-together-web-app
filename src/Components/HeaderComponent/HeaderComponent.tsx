import React from 'react'
import "./Header.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../../Assets/icon-app.png';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowUpRightFromSquare, faBell, faEarth, faHouse, faMap, faMessage, faSearch, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <a href="#" id="fb" data-tooltip="Home"> <img src={logo} alt="Logo" className='' /></a> </li>
                    <li> <button id="search_btn" className="tooltips" data-tooltip="Search"> <FontAwesomeIcon icon={faSearch} /> </button></li>
                    <li id="space2"></li>
                    <li> <a className="tooltips active" data-tooltip="Home" href="#" id="home"> <FontAwesomeIcon icon={faHouse} />  </a> </li>
                    <li> <a className="tooltips" data-tooltip="Group" href="#" id="explore"> <FontAwesomeIcon icon={faEarth} />  </a></li>
                    <li> <a className="tooltips" data-tooltip="Group" href="#" id="group"> <FontAwesomeIcon icon={faMap} />  </a></li>
                    <li> <a className="tooltips" data-tooltip="Watch" href="#" id="tv"> <FontAwesomeIcon icon={faVideo} />  </a> </li>
                    <li id="space1"></li>
                    <li> <button className="tooltips" data-tooltip="Add" id="btn_plus"><FontAwesomeIcon icon={faUser} /> </button> </li>
                    <li> <button className="tooltips" data-tooltip="Message" id="btn_msg"><FontAwesomeIcon icon={faMessage} /> </button></li>
                    <li> <button className="tooltips" data-tooltip="Notification" id="btn_bell"> <FontAwesomeIcon icon={faBell} /> </button></li>
                    <li>  <button className="tooltips" data-tooltip="Profile" id="btn_profile"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </button>  </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent
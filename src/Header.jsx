import React from 'react'
import {Link} from "react-router-dom";

export function Header(props){
    return(
        <div>
            
            <div className="header__inner">
                
                    <div className="header__logo">
                        <Link to="/home">
                            <img src={props.logo} className="logo" alt="logo"/>
                        </Link>
                    </div>
                <div className="header__button">
                    <div className="header__button-home">
                        <Link to="/home">
                            <img src={props.home} className="home" alt="home" />
                        </Link>
                    </div>
                    <div className="header__button-send">
                        <Link to="/direct">
                            <img src={props.send} className="send" alt="send" />
                        </Link>
                    </div>
                    <div className="header__button-compass">
                        <img src={props.compass} className="compass" alt="compass" />
                    </div>
                    <div className="header__button-heart">
                        <img src={props.heart} className="heart" alt="heart" />
                    </div>
                    <div className="user"></div>
                </div>
            </div>
        </div>
    )
}
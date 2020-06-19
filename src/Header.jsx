import React from 'react'
import logo from './logo.png'
import heart from './heart.png'
import send from './send.png'
import compass from './compass.png'
import home from './home.png'
import './Header.css'

export function Header(props){
    return(
        <div>
            <div className="header__inner">
                <div className="header__logo">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="header__button">
                    <div className="header__button-home">
                        <img src={home} className="home" alt="home" />
                    </div>
                    <div className="header__button-send">
                        <img src={send} className="send" alt="send" />
                    </div>
                    <div className="header__button-compass">
                        <img src={compass} className="compass" alt="compass" />
                    </div>
                    <div className="header__button-heart">
                        <img src={heart} className="heart" alt="heart" />
                    </div>
                    <div className="user"></div>
                </div>
            </div>
        </div>
    )
}
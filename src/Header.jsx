import React from 'react'

export function Header(props){
    return(
        <div>
            <div className="header__inner">
                <div className="header__logo">
                    <img src={props.logo} className="logo" alt="logo"/>
                </div>
                <div className="header__button">
                    <div className="header__button-home">
                        <img src={props.home} className="home" alt="home" />
                    </div>
                    <div className="header__button-send">
                        <img src={props.send} className="send" alt="send" />
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
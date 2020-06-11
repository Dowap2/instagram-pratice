import React from 'react';
import logo from './logo.png'
import heart from './heart.png'
import send from './send.png'
import compass from './compass.png'
import home from './home.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-content">
          <div className="logo-box">
            <img src={logo} className="logo" alt="logo"/>
          </div>
          <div className="icon-box">
            <div className="home-box">
              <img src={home} className="home-icon" alt="home" />
            </div>
            <div className="send-box">
              <img src={send} className="send-icon" alt="send" />
            </div>
            <div className="compass-box">
              <img src={compass} className="compass-icon" alt="compass" />
            </div>
            <div className="heart-box">
              <img src={heart} className="heart-icon" alt="heart" />
            </div>
            <div className="user"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

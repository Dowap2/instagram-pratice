import React, { useState } from 'react';
import {Header} from './Header'
import {FollowModal} from './FollowModal'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './CSS/App.css';

import logo from './IMG/logo.png'
import heart from './ICON/heart.png'
import send from './ICON/send.png'
import compass from './ICON/compass.png'
import home from './ICON/home.png'
import { Routes } from './Routes';

function App() {
  const [isTextModalVisible, setIsTextModalVisible] = useState("none")
  return (
    <div className="App">
      <FollowModal open={isTextModalVisible}/>
      <Router>
        <div className="header">
          <Header logo={logo} home={home} send={send} heart={heart} compass={compass}/>
        </div>
        <section className="content">
            <Routes />
        </section>
      </Router>
    </div>
  );
}

export default App;

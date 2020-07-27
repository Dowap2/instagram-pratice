import React from 'react';
import {Header} from '../Header'
import {BrowserRouter as Router} from 'react-router-dom';

import './CSS/App.css';

import logo from './IMG/logo.png'
import heart from './ICON/heart.png'
import send from './ICON/send.png'
import compass from './ICON/compass.png'
import home from './ICON/home.png'
import { Routes } from '../Routes';

function App() {
  return (
    <div className="App">
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

import React from 'react';
import './App.css';
import {Header} from './Header'
import {Story} from './Story'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="stroy">
        <Story />
      </div>
    </div>
  );
}

export default App;

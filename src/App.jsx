import React from 'react';
import './App.css';
import {Header} from './Header'
import {Story} from './Story'
import {Post} from './Post'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="stroy">
          <Story />
        </div>
        <div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import {Header} from './Header'
import {Story} from './Story'
import {Post} from './Post'
import {SideBar} from './SideBar'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="story">
          <Story />
        </div>
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;

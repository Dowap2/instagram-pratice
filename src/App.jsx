import React from 'react';
import './App.css';
import {Header} from './Header'
import {Story} from './Story'
import {Post} from './Post'
import {SideBar} from './SideBar'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="sideBar">
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

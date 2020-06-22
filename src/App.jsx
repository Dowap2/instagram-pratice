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
      <section className="content">
        <div className="content__main">
          <div className="story">
            <Story />
          </div>
          <div>
            <Post />
            <Post />
          </div>
        </div>
        <div className="side-bar">
          <SideBar />
        </div>
      </section>
    </div>
  );
}

export default App;

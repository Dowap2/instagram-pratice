import React from 'react';

import {SideTab} from './SideTab'
import {MessegeBox} from './MessegeBox'
import './CSS/Messege.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export function Messege(props) {
  return (
    <div>
        <div className="messege__background">
          <Router>
            <SideTab profile={props.profile}/>
            <MessegeBox send={props.send}/>
          </Router>
        </div>
    </div>
  );
}

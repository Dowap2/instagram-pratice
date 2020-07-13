import React from 'react';
import {SideTab} from './SideTab'
import {MessegeBox} from './MessegeBox'
import {BrowserRouter as Router} from 'react-router-dom';

import './CSS/Messege.css'

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

import React from 'react';

import {SideTab} from './SideTab'
import './Messege.css'

export function Messege(props) {
  return (
    <div>
        <div className="messege__background">
            <SideTab profile={props.profile}/>
        </div>
    </div>
  );
}

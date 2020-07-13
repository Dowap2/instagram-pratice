import React from 'react';
import {MessegeRoutes} from './MessegeRoutes';

export function MessegeBox(props) {
  return (
    <div className="messege-box">
        <div>
            <MessegeRoutes send={props.send}/>
        </div>
    </div>
  );
}

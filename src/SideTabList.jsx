import React from 'react';
import {SideTabUser} from './SideTabUser'
import {Link} from "react-router-dom";

export function SideTabList(props) {
  return (
    <div className="side-tab__list">
        <Link to="/t/00">
          <SideTabUser profile={props.profile}/>
        </Link>
        <Link to="/t/01">
          <SideTabUser profile={props.profile}/>
        </Link>
        <SideTabUser profile={props.profile}/>
        <SideTabUser profile={props.profile}/>
    </div>
  );
}

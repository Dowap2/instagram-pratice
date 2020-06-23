import React from 'react';
import {SideTabUser} from './SideTabUser'

export function SideTabList(props) {
  return (
    <div className="side-tab__list">
        <SideTabUser profile={props.profile}/>
        <SideTabUser profile={props.profile}/>
    </div>
  );
}

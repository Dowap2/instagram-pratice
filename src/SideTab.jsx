import React from 'react';
import {SideTabHeader} from './SideTabHeader'
import {SideTabMenu} from './SideTabMenu'
import {SideTabList} from './SideTabList'
import './CSS/SideTab.css'

export function SideTab(props) {
  return (
    <div className="side-tab">
        <SideTabHeader />
        <SideTabMenu />
        <SideTabList profile={props.profile}/>
    </div>
  );
}

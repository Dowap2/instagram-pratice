import React from 'react';
import {SideTabHeader} from './SideTabHeader'
import {SideTabMenu} from './SideTabMenu'
import './CSS/SideTab.css'

export function SideTab() {
  return (
    <div className="side-tab">
        <SideTabHeader />
        <SideTabMenu />
    </div>
  );
}

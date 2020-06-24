import React from 'react';
import pencil from './ICON/pencil.png'

export function SideTabHeader() {
  return (
    <div className="side-tab__header">
        <div className="side-tab__title">Direct</div>
        <div className="side-tab__header__icon">
            <img src={pencil} alt="pencil" className="create__messege__icon"/>
        </div>
    </div>
  );
}

import React from 'react';

export function SideTabUser(props) {
  return (
    <div className="side-tab__user">
        <div className="side-tab__user__profile">
          <img src={props.profile} className="side-tab__user__profile-picture"/>
        </div>
        <div className="side-tab__user__info">
          <div className="side-tab__user__name">jh_park.1</div>
          <div className="side-tab__user__recent-activities">최근활동 7시간 전</div>
        </div>
    </div>
  );
}

import React from 'react';
import profile from './profile.jpg'

export function SideBarUserProfile(props){
    return(
        <div>
            <div className="side-bar-user">
                <div className="side-bar-profile">
                    <img src={profile} className="side-bar-profile-picture"/>
                </div>
                <div className="side-bar-name">
                    <div className="side-bar-nickname"><b>junha0608</b></div>
                    <div className="side-bar-realname">박준하</div>
                </div>
            </div>
        </div>
    )
}
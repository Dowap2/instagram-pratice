import React from 'react';
import more from './more.png'
import profile from './profile.jpg'

export function User(props){
    return(
        <div>
            <div className="user-box">
                <div className="profile-box">
                    <img src={profile} alt="profile" className="user-profile"/>
                </div>
                <div className="user-box-user-name">junha</div>
                <div className="more-icon-box">
                    <img src={more} alt="more" className="more-icon"/>
                </div>
            </div>
        </div>
    )
}
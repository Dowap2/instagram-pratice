import React from 'react';
import profile from './profile.jpg'

export function FollowList(props){
    return(
        <div className="follow-list-box">
            <div className="follow-list">
                <div className="follow-list-profile">
                    <img src={profile} className="follow-list-profile"/>
                </div>
                <div className="follow-list-name">
                    <div className="follow-list-nickname">dowapdowari1003</div>
                    <div className="follow-list-information">Followed by ssungbo + 5 more</div>
                </div>
            </div>
            <div className="follow-list-button">팔로우</div>
        </div>
    )
}
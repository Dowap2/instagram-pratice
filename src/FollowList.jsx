import React from 'react';
import profile from './profile.jpg'

export function FollowList(props){
    return(
        <div className="follow-list">
            <div className="follow-list__inner">
                <div className="follow-list__picture">
                    <img src={profile} className="picture"/>
                </div>
                <div className="follow-list__info">
                    <div className="follow-list__info__id">dowapdowari1003</div>
                    <div className="follow-list__info__info">Followed by ssungbo + 5 more</div>
                </div>
            </div>
            <div className="follow-list__button">팔로우</div>
        </div>
    )
}
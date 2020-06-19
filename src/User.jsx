import React from 'react';
import more from './more.png'
import profile from './profile.jpg'

export function User(props){
    return(
        <div>
            <div className="post__header">
                <div className="post__header__profile">
                    <img src={profile} alt="profile" className="post__header__profile__picture"/>
                </div>
                <div className="post__header__id">junha</div>
                <div className="post__header__icon">
                    <img src={more} alt="more" className="more"/>
                </div>
            </div>
        </div>
    )
}
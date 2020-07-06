import React from 'react';

export function User(props){
    return(
        <div>
            <div className="post__header">
                <div className="post__header__profile">
                    <img src={props.profile} alt="profile" className="post__header__profile__picture"/>
                </div>
                <div className="post__header__id">{props.userName}</div>
                <div className="post__header__icon">
                    <img src={props.more} alt="more" className="more"/>
                </div>
            </div>
        </div>
    )
}
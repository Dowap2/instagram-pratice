import React from 'react';

export function SideBarUserProfile(props){
    return(
        <div>
            <div className="side-bar__profile">
                <div>
                    <img src={props.profile} className="side-bar__profile__pictire"/>
                </div>
                <div className="side-bar__profile__info">
                    <div className="side-bar__profile__info__id">junha0608</div>
                    <div className="side-bar__profile__info__name">박준하</div>
                </div>
            </div>
        </div>
    )
}
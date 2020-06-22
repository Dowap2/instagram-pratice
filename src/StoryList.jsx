import React from 'react'

export function StoryList(props){
    return(
        <div>
             <div className="story__list__profile">
                <div className="story__list__profile-border">
                    <img src={props.profile} alt="profile" className="profile"/>
                </div>
                <div className="story__list__id">{props.user}</div>
            </div>
        </div>
    )
}
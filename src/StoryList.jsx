import React, { useState } from 'react'

export function StoryList(props){
    return(
        <div>
             <div className="story__list__profile">
                <div className="story__list__profile-border">
                    <img src={props.img} className="profile"/>
                </div>
                <div className="story__list__id">{props.name}</div>
            </div>
        </div>
    )
}
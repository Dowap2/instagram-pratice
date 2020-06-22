import React from 'react'
import {StoryList} from './StoryList'

export function Story(props){
    return(
        <div>
            <div className="story__inner">
                <div className="story__list">
                    <StoryList profile={props.profile} user={"dowap"}/>
                    <StoryList profile={props.profile} user={"davnd"}/>
                    <StoryList profile={props.profile} user={"wadap"}/>
                    <StoryList profile={props.profile} user={"yons01"}/>
                    <StoryList profile={props.profile} user={"hund1002"}/>
                    <StoryList profile={props.profile} user={"gyeongt"}/>
                </div>
            </div>
        </div>
    )
}
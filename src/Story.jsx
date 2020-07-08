import React from 'react'
import {StoryList} from './StoryList'
import next from './ICON/next.png'

export function Story(props){
    return(
        <div className="story__box">
            <div className="story__inner">
                <button className="story__next__button">
                    <img src={next} className="story__next"/>
                </button>
                <div className="story__list">
                    <StoryList/>
                    <StoryList/>
                    <StoryList/>
                    <StoryList/>
                    <StoryList/>
                    <StoryList/>
                    <StoryList/>
                    <StoryList/>
                    <StoryList/>
                </div>
            </div>
        </div>
    )
}
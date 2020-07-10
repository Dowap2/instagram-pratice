import React, { useState } from 'react'
import axios from 'axios'
import {StoryList} from './StoryList'
import next from './ICON/next.png'

export function Story(props){
    const [storyList , setStoryList] = useState([])
    const [storyItem , setStoryItem] = useState([])

    function addAxios(){
        axios({
          method: 'get',
          url: 'https://randomuser.me/api/',
          responseType: 'json'
        })
        .then(response => {
          makeStory(response.data.results[0])
        }).catch(err => {console.log(err)})
    }

    function makeStory(info){
        setStoryItem(<StoryList img={info.picture.large} name={info.name.first}/>)
        setStoryList(storyList.concat(storyItem))
    }

    return(
        <div className="story__box">
            <button className="functionButton" onClick={e=> addAxios()}>addStory</button>
            <div className="story__inner">
                <button className="story__next__button">
                    <img src={next} className="story__next"/>
                </button>
                <div className="story__list">
                    {storyList}
                </div>
            </div>
        </div>
    )
}
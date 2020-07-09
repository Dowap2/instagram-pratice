import React, { useState } from 'react'
import axios from 'axios'
import {StoryList} from './StoryList'
import next from './ICON/next.png'

export function Story(props){
    const [storyList,setStoryList] = useState([])
    let storyItem = [];
    if(storyList.length < 10){
        axios({
            method: 'get',
            url: 'https://randomuser.me/api/',
            headers: {"Access-Control-Allow-Origin": "*"},
            responseType: 'json'
        })
        .then(response => {
            console.log(response.data)
            let Data = response.data.results[0]
            storyItem = <StoryList img={Data.picture.large} name={Data.name.first}/>
            setStoryList(storyList.concat(storyItem))
        }).catch(err => {console.log(err)})
    }
    return(
        <div className="story__box">
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
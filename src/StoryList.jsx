import React, { useState } from 'react'
import axios from 'axios'

export function StoryList(props){
    const [userData, setUserData] = useState();
    const [story , setStory] = useState();

    (function getData(){
        axios({
            method: 'get',
            url: 'https://randomuser.me/api/',
            responseType: 'json'
        })
        .then(response => {
            console.log(response.data)
            setUserData(response.data.results[0])
            setStory(
                <div className="story__list__profile">
                    <div className="story__list__profile-border">
                        <img src={userData.picture.large} className="profile"/>
                    </div>
                    <div className="story__list__id">{userData.name.first}</div>
                </div>)
        }).catch(err => {
            
        })
    }())

    return(
        <div>
             {story}
        </div>
    )
}
import React, { useState } from 'react';
import {Story} from './Story'
import {Post} from './Post'
import {SideBar} from './SideBar'
import {FollowModal} from './FollowModal'
import axios from 'axios'

import './CSS/Header.css'
import './CSS/Story.css'
import './CSS/Post.css'
import './CSS/SideBar.css'

import example from './IMG/example.jpg'
import profile from './IMG/profile.jpg'
import heart from './ICON/heart.png'
import fill_heart from './ICON/fill_heart.png'
import send from './ICON/send.png'
import more from './ICON/more.png'
import comment from './ICON/comment.png'
import bookmark from './ICON/bookmark.png'

export function ContentHome() {
  const [modal , setModal] = useState("none")
  
  function getFunc(){
    axios({
      method: 'post',
      url: 'http://httpbin.org/post',
      responseType: 'json'
    })
    .then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="content__home">
      <FollowModal open={modal} setOpen={setModal}/>
        <div className="content__main">
          <div className="story">
            <Story profile={profile}/>
            <input type="button" value="post" id="btnPost" onClick={e=> getFunc()}/>
          </div>
          <div>
            <Post 
              more={more} profile={profile} img={example}
              heart={heart} fill_heart={fill_heart} comment={comment} send={send} bookmark={bookmark}
            />
            <Post 
              more={more} profile={profile} img={example}
              heart={heart} fill_heart={fill_heart} comment={comment} send={send} bookmark={bookmark}
            />
          </div>
        </div>
        <div className="side-bar">
          <SideBar profile={profile} modal={modal} setModal={setModal}/>
        </div>
    </div>
  );
}

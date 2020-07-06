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
import { getByText } from '@testing-library/dom';

export function ContentHome() {
  const [modal , setModal] = useState("none")
  const [addPost , setAddPost] = useState()
  const [userText , setUserText] = useState("")
  let userName = "DRX_Deft"

  function getFunc(){
    axios({
      method: 'get',
      url: 'https://randomuser.me/api/',
      responseType: 'json'
    })
    .then(response => {
      console.log(response.data)
      addPostFunc(response.data.results)
    }).catch(err => {
      console.log(err)
    })
  }
  function addPostFunc(data){
    if(data != undefined){
      getText();
      console.log(data[0].picture.large)
      setAddPost(<Post
        more={more} profile={profile} img={data[0].picture.large} userName={data[0].email} userText={userText}
        heart={heart} fill_heart={fill_heart} comment={comment} send={send} bookmark={bookmark}
      />)
    }
    function getText(){
      axios({
        method: 'get',
        url: 'https://www.randomtext.me/api/lorem/ul-5/5-15/',
        responseType: 'json'
      }).then(response => {
        console.log(response.data)
        setUserText(response.data.text_out)
      }).catch(err => {
        console.log(err)
      })
    }
  }
  
  return (
    <div className="content__home">
      <FollowModal open={modal} setOpen={setModal}/>
        <div className="content__main">
          <div className="story">
            <Story profile={profile}/>
            <input type="button" value="post" id="btnPost" onClick={e=> getFunc()}/>
            <input type="button" value="post" id="btnPost" onClick={e=> console.log(addPost)}/>
            <input type="button" value="post" id="btnPost" onClick={e=> console.log(userText)}/>
          </div>
          <div>
            <Post 
              more={more} profile={profile} img={example} userName={userName}
              heart={heart} fill_heart={fill_heart} comment={comment} send={send} bookmark={bookmark}
            />
            <Post 
              more={more} profile={profile} img={example} userName={userName}
              heart={heart} fill_heart={fill_heart} comment={comment} send={send} bookmark={bookmark}
            />
            {addPost}
          </div>
        </div>
        <div className="side-bar">
          <SideBar profile={profile} modal={modal} setModal={setModal}/>
        </div>
    </div>
  );
}

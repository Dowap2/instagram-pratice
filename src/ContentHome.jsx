import React, { useState } from 'react';
import axios from 'axios'
import {Story} from './Story'
import {Post} from './Post'
import {SideBar} from './SideBar'
import {FollowModal} from './FollowModal'

import './CSS/Header.css'
import './CSS/Story.css'
import './CSS/Post.css'
import './CSS/SideBar.css'

import profile from './IMG/profile.jpg'
import heart from './ICON/heart.png'
import fill_heart from './ICON/fill_heart.png'
import send from './ICON/send.png'
import more from './ICON/more.png'
import comment from './ICON/comment.png'
import bookmark from './ICON/bookmark.png'

export function ContentHome() {
  const [modal , setModal] = useState("none")
  const [addPost , setAddPost] = useState([])

  function addAxios(){
    axios({
      method: 'get',
      url: 'https://randomuser.me/api/',
      responseType: 'json'
    })
    .then(response => {
      makePost(response.data.results[0])
    }).catch(err => {console.log(err)})
  }

  function makePost(info){
    const post = <Post
                  more={more} profile={info.picture.large} userName={info.email} img={"https://source.unsplash.com/random/800x800"}
                  heart={heart} fill_heart={fill_heart} comment={comment} send={send} bookmark={bookmark}
                />
    const array = addPost.concat(post)
    setAddPost(array)
  }

  function InfinityScrolling(){
    if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight-100)){
      addAxios();
    }
  };

  
  return (
    <div className="content__home" onscroll={InfinityScrolling()}>
      <FollowModal open={modal} setOpen={setModal}/>
        <div className="content__main">
          <div className="story">
            <Story profile={profile}/>
          </div>
          <div>
            {addPost}
          </div>
        </div>
        <div className="side-bar">
          <SideBar profile={profile} modal={modal} setModal={setModal}/>
        </div>
    </div>
  );
}

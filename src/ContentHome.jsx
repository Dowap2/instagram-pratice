import React from 'react';
import {Story} from './Story'
import {Post} from './Post'
import {SideBar} from './SideBar'

import './CSS/Header.css'
import './CSS/Story.css'
import './CSS/Post.css'
import './CSS/SideBar.css'

import example from './IMG/example.jpg'
import profile from './IMG/profile.jpg'
import heart from './ICON/heart.png'
import send from './ICON/send.png'
import more from './ICON/more.png'
import comment from './ICON/comment.png'
import bookmark from './ICON/bookmark.png'

export function ContentHome() {
  return (
    <div>
        <div className="content__main">
          <div className="story">
            <Story profile={profile}/>
          </div>
          <div>
            <Post 
              more={more} profile={profile} img={example}
              heart={heart} comment={comment} send={send} bookmark={bookmark}
            />
            <Post 
              more={more} profile={profile} img={example}
              heart={heart} comment={comment} send={send} bookmark={bookmark}
            />
          </div>
        </div>
        <div className="side-bar">
          <SideBar profile={profile}/>
        </div>
    </div>
  );
}

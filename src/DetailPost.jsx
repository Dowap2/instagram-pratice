import React, { useState } from 'react';
import {DetailPostHeader} from './DetailPostHeader'
import {DetailPostComment} from './DetailPostComment'
import {DetailPostAddComment} from './DetailPostAddComment'

import more from './ICON/more.png'
import './CSS/DetailPost.css'


export function DetailPost({ match, location, history }){
    const info = location.state;
    const [comment , setComment] = useState("")
    const [addComment , setAddComment] = useState()
    return(
    <div>
        <div className="detail-post">
            <div className="detail-post__picture">
                <img src={info.img} className="detail-post__picture"/>
            </div>
            <div>
                <DetailPostHeader more={more} profile={info.profile} name={info.name}/>
                <DetailPostComment profile={info.profile} comment={info.list} addComment={addComment} setAddComment={setAddComment}/>
                <DetailPostAddComment value={comment} onChange={setComment} comment={setAddComment}/>
            </div>
        </div>
    </div>)
}
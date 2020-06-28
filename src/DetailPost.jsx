import React, { useState } from 'react';
import {DetailPostHeader} from './DetailPostHeader'
import {DetailPostComment} from './DetailPostComment'
import {DetailPostAddComment} from './DetailPostAddComment'

import more from './ICON/more.png'
import './CSS/DetailPost.css'


export function DetailPost({ match, location, history }){
    const commentList = location.state;
    const [comment , setComment] = useState("")
    const [addComment , setAddComment] = useState()
    return(
    <div>
        <div className="detail-post">
            <div className="detail-post__picture">
                <img src={"https://source.unsplash.com/900x900/?nature,water"} className="detail-post__picture"/>
            </div>
            <div>
                <DetailPostHeader more={more}/>
                <DetailPostComment img={"https://source.unsplash.com/900x900/?logo"} comment={commentList} addComment={addComment} setAddComment={setAddComment}/>
                <DetailPostAddComment value={comment} onChange={setComment} comment={setAddComment}/>
            </div>
        </div>
    </div>)
}
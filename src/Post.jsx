import React, { useState } from 'react';
import {User} from './User'
import {Picture} from './Picture'
import {CommentHeader} from './CommentHeader'
import {Comment} from './Comment'
import {AddComment} from './AddComment'
import test from './test.php'

export function Post(props){
    const [comment , setComment] = useState()
    const [likeNum , setLikeNum] = useState(12);

    return(
        <div>
            <div className="post">
                <User more={props.more} profile={props.img} userName={props.userName}/>
                <Picture img={"https://source.unsplash.com/900x900/?nature,water"}/>
                <CommentHeader heart={props.heart} fill_heart={props.fill_heart} comment={props.comment} send={props.send} bookmark={props.bookmark} likeNum={likeNum} setLikeNum={setLikeNum}/>
                <Comment profile={props.profile} userText={props.userText} user={props.userName} comment={comment} setComment={setComment} likeNum={likeNum}/>
                <AddComment comment={setComment}/>
                <button onClick={e=> console.log(props.userText)}></button>
            </div>
        </div>
    )
} 
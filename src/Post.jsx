import React, { useState } from 'react';
import {User} from './User'
import {Picture} from './Picture'
import {CommentHeader} from './CommentHeader'
import {Comment} from './Comment'
import {AddComment} from './AddComment'

export function Post(props){
    const [comment , setComment] = useState()
    const [likeNum , setLikeNum] = useState(12);

    return(
        <div>
            <div className="post">
                <User more={props.more} profile={props.profile} userName={props.userName}/>
                <Picture img={props.img}/>
                <CommentHeader heart={props.heart} fill_heart={props.fill_heart} comment={props.comment} send={props.send} bookmark={props.bookmark} likeNum={likeNum} setLikeNum={setLikeNum}/>
                <Comment img={props.img} name={props.userName} profile={props.profile} userText={props.userText} user={props.userName} comment={comment} setComment={setComment} likeNum={likeNum}/>
                <AddComment comment={setComment}/>
            </div>
        </div>
    )
} 
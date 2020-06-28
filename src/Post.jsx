import React, { useState } from 'react';
import {User} from './User'
import {Picture} from './Picture'
import {CommentHeader} from './CommentHeader'
import {Comment} from './Comment'
import {AddComment} from './AddComment'

export function Post(props){
    const [commentText , setCommentText] = useState()
    const [comment , setComment] = useState()
    const [likeNum , setLikeNum] = useState(12);
    const [hiddenList , setHiddenList] = useState([])

    return(
        <div>
            <div className="post">
                <User more={props.more} profile={props.profile}/>
                <Picture img={"https://source.unsplash.com/900x900/?nature,water"}/>
                <CommentHeader heart={props.heart} fill_heart={props.fill_heart} comment={props.comment} send={props.send} bookmark={props.bookmark} likeNum={likeNum} setLikeNum={setLikeNum}/>
                <Comment profile={props.profile} user={"dowap"} comment={comment} setComment={setComment} likeNum={likeNum}/>
                <AddComment value={commentText} onChange={setCommentText} comment={setComment}/>
            </div>
        </div>
    )
}
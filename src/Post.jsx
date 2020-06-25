import React, { useState } from 'react';
import {User} from './User'
import {Picture} from './Picture'
import {CommentHeader} from './CommentHeader'
import {Comment} from './Comment'
import {AddComment} from './AddComment'

export function Post(props){
    const [commentText , setCommentText] = useState()
    const [comment , setComment] = useState()

    return(
        <div>
            <div className="post">
                <User more={props.more} profile={props.profile}/>
                <Picture img={"https://source.unsplash.com/900x900/?nature,water"}/>
                <CommentHeader heart={props.heart} comment={props.comment} send={props.send} bookmark={props.bookmark}/>
                <Comment profile={props.profile} user={"dowap"} comment={comment} setComment={setComment}/>
                <AddComment value={commentText} onChange={setCommentText} comment={setComment}/>
            </div>
        </div>
    )
}
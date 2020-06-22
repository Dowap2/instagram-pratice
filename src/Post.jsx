import React from 'react';
import {User} from './User'
import {Picture} from './Picture'
import {CommentHeader} from './CommentHeader'
import {Comment} from './Comment'
import {AddComment} from './AddComment'

export function Post(props){
    return(
        <div>
            <div className="post">
                <User more={props.more} profile={props.profile}/>
                <Picture img={props.img}/>
                <CommentHeader heart={props.heart} comment={props.comment} send={props.send} bookmark={props.bookmark}/>
                <Comment profile={props.profile} user={"dowap"}/>
                <AddComment />
            </div>
        </div>
    )
}
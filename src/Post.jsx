import React from 'react';
import {User} from './User'
import {Picture} from './Picture'
import {Comment} from './Comment'
import {AddComment} from './AddComment'

export function Post(props){
    return(
        <div>
            <div className="Post-box">
                <User />
                <Picture />
                <Comment />
                <AddComment />
            </div>
        </div>
    )
}
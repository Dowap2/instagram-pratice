import React from 'react';

export function CommentHeader(props){
    return(
        <div>
            <div className="post__comment__icon">
                <img src={props.heart} alt="heart" className="heart"/>
                <img src={props.comment} alt="comment" className="comment"/>
                <img src={props.send} alt="send" className="send"/>
                <img src={props.bookmark} alt="bookmark" className="bookmark"/>
            </div>
        </div>
    )
}
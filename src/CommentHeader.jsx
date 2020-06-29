import React, { useState } from 'react';
import {Link} from 'react-router-dom'

export function CommentHeader(props){
    const [heart,setHeart] = useState(props.heart);

    function like(){
        if(heart == props.heart){
            setHeart(props.fill_heart);
            props.setLikeNum(props.likeNum+1)
        }
        else{
            setHeart(props.heart)
            props.setLikeNum(props.likeNum-1)
        }
    }
    return(
        <div>
            <div className="post__comment__icon">
                <img src={heart} alt="heart" className="post__heart" onClick={e=> like()}/>
                <Link to="/p">
                    <img src={props.comment} alt="comment" className="post__comment"/>
                </Link>
                <Link to="/direct">
                    <img src={props.send} alt="send" className="post__send"/>
                </Link>
                <img src={props.bookmark} alt="bookmark" className="post__bookmark"/>
            </div>
        </div>
    )
}
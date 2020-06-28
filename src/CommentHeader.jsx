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
                <img src={heart} alt="heart" className="heart" onClick={e=> like()}/>
                <Link to="/p">
                    <img src={props.comment} alt="comment" className="comment"/>
                </Link>
                <img src={props.send} alt="send" className="send"/>
                <img src={props.bookmark} alt="bookmark" className="bookmark"/>
            </div>
        </div>
    )
}
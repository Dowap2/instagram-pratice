import React from 'react';
import './CSS/DetailPost.css'

export function DetailPostAddComment(props){

    function keyEvent(e){
        if(e.key == 'Enter' && e.target.value != ""){
            props.comment(e.target.value)
            props.onChange("")
        }
    }
    
    return(
    <div className="detail-post__add__comment">
        <input 
            type="text"
            placeholder="댓글 달기..."
            value={props.value}
            onChange={e=>props.onChange(e.target.value)}
            onKeyPress={e => keyEvent(e)}
            className="add__comment__input"
        />
    </div>)
}
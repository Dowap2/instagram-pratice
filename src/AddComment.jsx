import React, { useState } from 'react';

export function AddComment(props){
    const [comment , setComment] = useState("");
    function keyEvent(e){
        if(e.key == 'Enter' && comment != "" || e == "Button"){
            props.comment(comment)
            setComment("")
        }
    }

    return(
        <div>
            <div className="add__comment">
                <input 
                    type="text"
                    placeholder="댓글 달기..."
                    value={comment}
                    onChange={e=>setComment(e.target.value)}
                    onKeyPress={e => keyEvent(e)}
                    className="add__comment__input"
                />
                <button className="add__comment__button" onClick={e=> keyEvent("Button")}>게시</button>
            </div>
        </div>
    )
}
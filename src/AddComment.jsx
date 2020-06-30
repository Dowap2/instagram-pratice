import React, { useState, useEffect } from 'react';

export function AddComment(props){
    const [comment , setComment] = useState("");
    const [buttonColor , setButtonColor] = useState("add__comment__button");

    function keyEvent(e){
        if(e.key == 'Enter' && comment != "" || e == "Button" && comment != ""){
            props.comment(comment)
            setComment("")
            setButtonColor("add__comment__button")
        }
    }
    if(comment != ""){
        if(buttonColor == "add__comment__button"){
            setButtonColor("add__comment__button__fill")
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
                <button className={buttonColor} onClick={e=> keyEvent("Button")}>게시</button>
            </div>
        </div>
    )
}
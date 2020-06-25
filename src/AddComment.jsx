import React from 'react';

export function AddComment(props){

    function keyEvent(e){
        if(e.key == 'Enter' && e.target.value != ""){
            props.comment(e.target.value)
            props.onChange("")
        }
    }

    return(
        <div>
            <div className="add__comment">
                <input 
                    type="text"
                    placeholder="댓글 달기..."
                    value={props.value}
                    onChange={e=>props.onChange(e.target.value)}
                    onKeyPress={e => keyEvent(e)}
                    className="add__comment__input"
                />
                <button className="add__comment__button">게시</button>
            </div>
        </div>
    )
}
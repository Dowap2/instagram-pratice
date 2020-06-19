import React from 'react';

export function AddComment(props){
    return(
        <div>
            <div className="add__comment">
                <input 
                    type="text"
                    placeholder="댓글 달기..."
                    className="add__comment__input"
                />
                <button className="add__comment__button">게시</button>
            </div>
        </div>
    )
}
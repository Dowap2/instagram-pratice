import React from 'react';

export function AddComment(props){
    return(
        <div>
            <div className="AddComment-box">
                <input 
                    type="text"
                    placeholder="댓글 달기..."
                    className="AddComment-input"
                />
                <button className="AddComment-button">게시</button>
            </div>
        </div>
    )
}
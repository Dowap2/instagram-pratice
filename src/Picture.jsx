import React from 'react';
import example from './example.jpg'

export function Picture(props){
    return(
        <div>
            <div className="post-picture-box">
                <img src={example} alt="example" className="post-picture"/>
            </div>
        </div>
    )
}
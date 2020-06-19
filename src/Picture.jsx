import React from 'react';
import example from './example.jpg'

export function Picture(props){
    return(
        <div>
            <div className="post__picture">
                <img src={example} alt="example" className="post__picture__inner"/>
            </div>
        </div>
    )
}
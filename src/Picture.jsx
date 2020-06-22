import React from 'react';

export function Picture(props){
    return(
        <div>
            <div className="post__picture">
                <img src={props.img} alt="example" className="post__picture__inner"/>
            </div>
        </div>
    )
}
import React from 'react';

import './CSS/DetailPost.css'

export function DetailPostHeader(props){
    return(
    <div>
        <div className="detail-post__header">
            <div className="detail-post__profile__box">
                <img src={"https://source.unsplash.com/900x900/?logo"} className="detail-post__profile"/>
            </div>
            <div className="detail-post__id">
                dowapdowari
            </div>
            <div className="detail-post__more">
                <img src={props.more} alt="more" className="detail-post__more__icon"/>
            </div>
        </div>
    </div>)
}
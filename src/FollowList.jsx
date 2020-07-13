import React, { useState } from 'react';

export function FollowList(props){
    function follow(){
        if(props.follow == "팔로우"){
            props.setFollow("팔로잉")
            props.setBtn("follow-list__button__clicked")
        }
        else{
            props.setModal("flex")
        }
    }

    return(
        <div className="follow-list">
            <div className="follow-list__inner">
                <div className="follow-list__picture">
                    <img src={props.profile} className="picture"/>
                </div>
                <div className="follow-list__info">
                    <div className="follow-list__info__id">dowapdowari1003</div>
                    <div className="follow-list__info__info">Followed by ssungbo + 5 more</div>
                </div>
            </div>
            <button className={props.btn} onClick={e=> follow()}>{props.follow}</button>
        </div>
    )
}
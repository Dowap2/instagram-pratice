import React, { useState } from 'react';

export function FollowList(props){
    const [followText , setFollowText] = useState("팔로우")
    const [buttonClass , setButtonClass] = useState("follow-list__button")
    function follow(){
        if(followText == "팔로우"){
            setFollowText("팔로잉")
            setButtonClass("follow-list__button__clicked")
        }
        else{

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
            <button className={buttonClass} onClick={e=> follow()}>{followText}</button>
        </div>
    )
}
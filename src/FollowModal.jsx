import React, { useState } from 'react';

export function FollowModal(props){
    return(
        <div
            className="modal__overlay"
            style={{
                display : props.open
            }}
        >
            <div className="close__screen"></div>
            <div className="follow-modal">
                <div>
                    <div className="follow-modal__profile"><img src="profile" alt=""/></div>
                    <div className="follow-modal__text">Unfollow @o_ozogie?</div>
                </div>
                <button className="follow__cancel" onClick={e=> props.setOpen("none")}>팔로우취소</button>
                <button className="follow__cancel__cancel " onClick={e=> props.setOpen("none")}>취소</button>
            </div>
        </div>
    )
}
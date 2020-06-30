import React from 'react';
import {FollowList} from './FollowList'

export function RecommendFollow(props){
    return(
        <div>
            <div className="side-bar__follow">
                <div className="side-bar__follow__title"><b>회원님을 위한 추천</b></div>
                <div className="side-bar__follow__button">모두보기</div>
            </div>
            <div className="side-bar__follow-list">
                <FollowList profile={props.profile} modal={props.modal} setModal={props.setModal}/>
                <FollowList profile={props.profile}/>
                <FollowList profile={props.profile}/>
                <FollowList profile={props.profile}/>
                <FollowList profile={props.profile}/>
            </div>
        </div>
    )
}
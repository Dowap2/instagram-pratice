import React from 'react';
import {FollowList} from './FollowList'

export function RecommendFollow(props){
    return(
        <div>
            <div className="recommend-follow-title-box">
                <div className="recommend-follow-title"><b>회원님을 위한 추천</b></div>
                <div className="recommend-follow-button">모두보기</div>
            </div>
            <div classNam="recommend-follow-list">
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
            </div>
        </div>
    )
}
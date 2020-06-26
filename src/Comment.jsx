import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

let list = [];
let moreList = [];
let hiddenList = [];
let commentNum = 0;

export function Comment(props){
    const likeNum = 12;
    let commentList = <div className="post__comment__comment">
                        <b>Kim1Jun01</b>
                        <p className="post__comment_comment__text">{props.comment}</p>
                      </div>
    let moreComment = <p className="post__more__comment">댓글 {commentNum-1}개 모두 보기</p>
    if(props.comment != undefined){
        if(commentNum < 2){
            list = list.concat(commentList);
        }
        hiddenList = hiddenList.concat(props.comment);
        commentNum += 1;
        props.setComment(undefined)
        if(commentNum > 2){
            moreList = [];
            moreList = moreList.concat(moreComment);
        }
    }
    
    return(
        <div>
            <div className="post__comment__like">
                <img src={props.profile} alt="profile" className="post__comment__profile"/>
                <p className="post__comment__like__text"><b>{props.user}</b>님 <b>외 {likeNum}명</b>이 좋아합니다.</p>
            </div>
            <div className="post__comment__title">
                <b className="post__comment__id">{props.user}</b>
                <p className="post__title">원준이 개 멍청하게 생겼다 ㄹ...</p>
                <p className="post-more">더보기</p>
            </div>
            <div className="post__comment__text">
                <Link to={{ pathname: '/p', state: hiddenList }}>
                    {moreList}
                </Link>
                {list}
            </div>
        </div>
    )
}
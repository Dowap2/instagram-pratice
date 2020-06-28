import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

let list = []; //home에서 보이는 리스트
let moreList = []; //p로 가는 버튼
let hiddenList = []; //p로 넘기는 모든 댓글
let commentNum = 0;
let moreTitle = []
let moreText = "...더보기"

export function Comment(props){
    let commentList = <div className="post__comment__comment">
                        <b>Kim1Jun01</b>
                        <p className="post__comment_comment__text">{props.comment}</p>
                      </div>

    let moreComment = <p className="post__more__comment">댓글 {commentNum-1}개 모두 보기</p>

    if(props.comment != undefined){
        if(commentNum < 2){
            list = list.concat(commentList);
        }
        if(commentNum >= 2){
            moreList = [];
            moreList = moreList.concat(moreComment);
        }
        hiddenList = hiddenList.concat(props.comment);
        commentNum += 1;
        props.setComment(undefined)
    }
    function more(){
        moreTitle=<div>#text</div>
        moreText=null
    }
    return(
        <div>
            <div className="post__comment__like">
                <img src={props.profile} alt="profile" className="post__comment__profile"/>
                <p className="post__comment__like__text"><b>{props.user}</b>님 <b>외 {props.likeNum}명</b>이 좋아합니다.</p>
            </div>
            <div className="post__comment__title">
                <b className="post__comment__id">{props.user}</b>
                <p className="post__title">원준이 개 멍청하게 생겼다</p>
                <p className="post-more" onClick={e => more()}>{moreText}</p>
                <div>{moreTitle}</div>
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
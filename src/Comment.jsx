import React from 'react';
import comment from './comment.png'
import heart from './heart.png'
import send from './send.png'
import bookmark from './bookmark.png'
import profile from './profile.jpg'

export function Comment(props){

    const userName = "Junha"
    const commentNum = 8

    return(
        <div>
            <div className="comment-icon-box">
                <img src={heart} alt="heart" className="comment-heart-icon"/>
                <img src={comment} alt="comment" className="comment-comment-icon"/>
                <img src={send} alt="send" className="comment-send-icon"/>
                <img src={bookmark} alt="bookmark" className="comment-bookmark-icon"/>
            </div>
            <div className="comment-like-box">
                <img src={profile} alt="profile" className="comment-profile"/>
                <p className="comment-like-text"><b>{userName}</b>님 <b>외 00명</b>이 좋아합니다.</p>
            </div>
            <div className="post-text-box">
                <b className="post-user-name">{userName}</b>
                <p className="post-user-text">원준이 개 멍청하게 생겼다 ㄹ...</p>
                <p className="post-more">더보기</p>
            </div>
            <div className="comment-box">
                <p className="more-comment">댓글 {commentNum}개 모두 보기</p>
                <div className="comment-comment-box">
                    <b>Kim1Jun01</b>
                    <p className="comment-text">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ레전드</p>
                </div>
                <div className="comment-comment-box">
                    <b>PaperEd</b>
                    <p className="comment-text">개잘찍었네ㄷ</p>
                </div>
            </div>
        </div>
    )
}
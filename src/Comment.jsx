import React from 'react';

export function Comment(props){
    const commentNum = 2;
    const likeNum = 12;
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
                <p className="post__more__comment">댓글 {commentNum}개 모두 보기</p>
                <div className="post__comment__comment">
                    <b>Kim1Jun01</b>
                    <p className="post__comment_comment__text">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ레전드</p>
                </div>
                <div className="post__comment__comment">
                    <b>PaperEd</b>
                    <p className="post__comment_comment__text">개잘찍었네ㄷ</p>
                </div>
            </div>
        </div>
    )
}
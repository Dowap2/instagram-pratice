import React, { useEffect } from 'react';
import './CSS/DetailPost.css'

let commentList = [];
export function DetailPostComment(props){
    let commentNum = commentList.length;
    if(props.addComment != null){
        let newCommentItem =    <div className="comment__item">
                                    <img src={props.profile} className="post-comment__profile"/>
                                    <div className="post-comment__comment__text">
                                        <div>
                                            <b className="user__id">dowapdowari</b>{props.addComment}
                                        </div>
                                        <div className="comment__info">
                                            <div className="comment__time">2d</div>
                                            <div className="comment__reply"><b>reply</b></div>
                                        </div>
                                    </div>
                                </div>
        commentList = commentList.concat(newCommentItem)
        props.setAddComment(null)
    }
    if(props.comment != null){
        for(let i=0; i<props.comment.length; i++){
            let commentItem =   <div className="comment__item">
                                    <img src={props.profile} className="post-comment__profile"/>
                                    <div className="post-comment__comment__text">
                                        <div>
                                            <b className="user__id">dowapdowari</b>{props.comment[i]}
                                        </div>
                                        <div className="comment__info">
                                            <div className="comment__time">2d</div>
                                            <div className="comment__reply"><b>reply</b></div>
                                        </div>
                                    </div>
                                </div>
            if(props.comment[i] != null){
                commentList = commentList.concat(commentItem)
                props.comment[i] = null
            }
        }
    }
    return(
    <div className="post-comment__box">
        <div className="post-comment">
            <div className="post-comment__profile__box">
                <img src={props.profile} className="post-comment__profile"/>
            </div>
            <div className="post-comment__comment">
                <div className="post-comment__title">
                    <div className="post-comment__text"><b className="user__id">dowapdowari</b>미안하다 이거 보여주려고 어그로끌었다.. 
                    나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 
                    그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..
                    진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 
                    전설적인 영웅이된나루토보면 진짜내가다 감격스럽고</div>
                    <div className="post-comment__tag">
                        #나루토 #이거보여주려고_어그로끌었다
                    </div>
                </div>
            </div>
        </div>
        <div className="post-comment__comment__box">
            {commentList}
        </div>
    </div>)
}
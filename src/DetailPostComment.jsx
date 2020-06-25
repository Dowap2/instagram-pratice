import React from 'react';
import './CSS/DetailPost.css'
import { directive } from '@babel/types';


export function DetailPostComment(props){
    return(
    <div>
        <div className="post-comment">
            <div className="post-comment__profile__box">
                <img src={props.img} className="post-comment__profile"/>
            </div>
            <div className="post-comment__comment">
                <div className="post-comment__title">
                    <div className="post-comment__text"><b>dowapdowari</b>  미안하다 이거 보여주려고 어그로끌었다.. 
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
            <img src={props.img} className="post-comment__profile"/>
            <div className="post-comment__comment__text"><b>dowapdowari</b>
            </div>
        </div>
    </div>)
}
import React from 'react';
import send from './ICON/send.png'

export function CreateMessege(props){
    return(
    <div className="create__messege">
        <div className="messege__send__icon__box">
            <img src={send} className="messege__send__icon"/>
        </div>
        <div>
            <div className="meesege__send__basic__title">내 메세지</div>
            <div className="meesege__send__basic__subtitle">친구나 그룹에 비공개 사진과 메시지를 보내보세요.</div>
            <div className="create__messege__button__box">
                <button className="create__messege__button">메세지 보내기</button>
            </div>
        </div>
    </div>)
}
import React from 'react';
import {DetailPostHeader} from './DetailPostHeader'
import {DetailPostComment} from './DetailPostComment'
import {DetailPostAddComment} from './DetailPostAddComment'

import more from './ICON/more.png'
import './CSS/DetailPost.css'


export function DetailPost(props){
    return(
    <div>
        <div className="detail-post">
            <div className="detail-post__picture">
                <img src={"https://source.unsplash.com/900x900/?nature,water"} className="detail-post__picture"/>
            </div>
            <div>
                <DetailPostHeader more={more}/>
                <DetailPostComment img={"https://source.unsplash.com/900x900/?logo"}/>
                <DetailPostAddComment/>
                <button onClick={e=> console.log(props.match.params.value)}>ㅇ허무ㅠㅏㅓㅜㅈ</button>
            </div>
            
        </div>
    </div>)
}
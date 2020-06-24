import React from 'react';

export function MessegeText(props){
    return(
    <div>
        {props.match.params.messege}
        <button onClick={e=> console.log(props)}></button>
    </div>)
}
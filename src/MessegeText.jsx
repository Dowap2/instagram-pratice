import React from 'react';

export function MessegeText(props){
    return(
    <div>
        {props.match.params.messege}
    </div>)
}
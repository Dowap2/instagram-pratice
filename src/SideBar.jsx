import React from 'react';
import {SideBarUserProfile} from './SideBarUserProfile'
import {RecommendFollow} from './RecommendFollow'
import {Footer} from './Footer'

export function SideBar(props){
    return(
        <div>
            <div className="side-bar">
                <SideBarUserProfile profile={props.profile}/>
                <RecommendFollow profile={props.profile} modal={props.modal} setModal={props.setModal}/>
                <Footer />
            </div>
        </div>
    )
}
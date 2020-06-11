import React from 'react'
import profile from './profile.jpg'

export function Story(props){
    return(
        <div>
            <div className="story-box">
                <div className="story-list">
                    <div className="user-list">
                        <div className="user-profile-box">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                        <div className="user-name">dowap</div>
                    </div>
                    <div className="user-list">
                        <div className="user-profile-box">
                            <img src="" alt=""/>
                        </div>
                        <div className="user-name">dowap</div>
                    </div>
                    <div className="user-list">
                        <div className="user-profile-box">
                            <img src="" alt=""/>
                        </div>
                        <div className="user-name">dowap</div>
                    </div>
                    <div className="user-list">
                        <div className="user-profile-box">
                            <img src="" alt=""/>
                        </div>
                        <div className="user-name">dowap</div>
                    </div>
                    <div className="user-list">
                        <div className="user-profile-box">
                            <img src="" alt=""/>
                        </div>
                        <div className="user-name">dowap</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import profile from './profile.jpg'
import './Story.css'

export function Story(props){
    return(
        <div>
            <div className="story__inner">
                <div className="story__list">
                    <div className="story__list__profile">
                        <div className="story__list__profile-border">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                        <div className="story__list__id">dowap</div>
                    </div>
                    <div className="story__list__profile">
                        <div className="story__list__profile-border">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                        <div className="story__list__id">dowap</div>
                    </div>
                    <div className="story__list__profile">
                        <div className="story__list__profile-border">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                        <div className="story__list__id">dowap</div>
                    </div>
                    <div className="story__list__profile">
                        <div className="story__list__profile-border">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                        <div className="story__list__id">dowap</div>
                    </div>
                    <div className="story__list__profile">
                        <div className="story__list__profile-border">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                        <div className="story__list__id">dowap</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
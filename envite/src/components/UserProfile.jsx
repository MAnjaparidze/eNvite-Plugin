import React, { Component } from 'react';
import '../css/UserProfileCSS.css';
import SignIn from './SignIn';
import GroupItem from './GroupItem';

export default class UserProfile extends Component {
    render() {
        return (
            <div className="userProfile--wrapper">
                <div className="close__button"></div>
                <div className="userProfile__body">
                    <div className="topSection">
                        <div className="userImage--wrapper">
                            <div className="userImage"></div>
                        </div>

                        <h1 className="welcome">Welcome Nina.</h1>
                        <span>you're Almost ready to start your</span>
                        <span>shopping date.</span>
                        
                    </div>

                    <div className="midSection">
                        <h2 className="header">Shopiqa Chats</h2>
                        <GroupItem />
                    </div>


                </div>
            </div>
        )
    }
}

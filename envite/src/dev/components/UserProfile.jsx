import React, { Component } from 'react';
import '../../css/UserProfileCSS.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroupItem from './GroupItem';
import UserIcon from '../../assets/nounUser11228000000001.png';
import FavoriteIcon from '../../assets/nounStar2097830000000.png';
import HistoryIcon from '../../assets/nounHistory576599000000.png';
import SettingsIcon from '../../assets/nounSettings1187813000000.png';
import GroupAddIcon from '../../assets/group2Copy.png';


class UserProfile extends Component {

    render() {
        return (
            <div className="userProfile--wrapper">
                <div className="close__button"></div>
                <div className="userProfile__body">
                    <div className="topSection">
                        <div className="userImage--wrapper">
                            <img className="userImage" src="https://randomuser.me/api/portraits/women/49.jpg"></img>
                        </div>

                        <h1 className="welcome">Welcome Nina.</h1>
                        <span>you're Almost ready to start your</span>
                        <span>shopping date.</span>

                    </div>

                    <h2 className="chats__header">Shopiqa Chats</h2>
                    <div className="midSection">
                        <GroupItem />
                        <GroupItem />
                        <GroupItem />
                    </div>

                    <div className="bottomSection">
                        <button className="userProfile__Icon"><img src={UserIcon}></img></button>
                        <button className="userFavorites__Icon"> <img src={FavoriteIcon}></img></button>
                        <div className="addGroup__button--wrapper--wrapper">
                            <div className="addGroup__button--wrapper"><img src={GroupAddIcon}/></div>
                        </div>
                        <button className="userHistory__Icon"><img src={HistoryIcon}></img></button>
                        <button className="userSettings__Icon"><img src={SettingsIcon}></img></button>



                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users[0]
    }
}

export default connect(mapStateToProps)(UserProfile);
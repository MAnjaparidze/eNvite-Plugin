import React, { Component } from 'react';
import '../../../css/user/UserProfileCSS.css';
import '../../../css/user/UserSettingsCSS.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroupItem from '../groupChat/GroupItem';
import UserIcon from '../../../assets/nounUser11228000000001.png';
import FavoriteIcon from '../../../assets/nounStar2097830000000.png';
import HistoryIcon from '../../../assets/nounHistory576599000000.png';
import SettingsIcon from '../../../assets/nounSettings1187813000000.png';
import ConfirmIcon from '../../../assets/nounCheckMark5938940000001.png';
import ExitIcon from '../../../assets/nounClose2043081000000Copy.png';


class UserProfile extends Component {

    createGroupsDiv() {
        return this.props.groups.map((group) => {
            return <GroupItem key={group.id} groupLetterColor={group.groupLetterColor} groupTitle={group.title} groupMembers={group.members} />
        });
    }

    render() {
        return (
            <div className="dashboard__userProfile--wrapper">
                <div className="dashboard__userProfile__body">
                    <div className="dashboard__topSection  userProfile__topSection">
                        <div className="dashboard__userImage__wrapper userProfile__userImage__wrapper">
                            <img className="dashboard__userImage userProfile__userImage" src="https://randomuser.me/api/portraits/women/49.jpg"></img>
                            <img className="userProfile__exit" src={ExitIcon} alt="" />
                        </div>

                        <div className="userProfile__userInfo__wrapper">
                            <div className="userProfile__userInfo__name__wrapper">
                                <div>
                                   
                                    
                                    <label for="firstName">First Name</label>
                                    <input defaultValue="Nina" id="firstName" type="text" />
                                   
                                </div>
                                <div>
                                  
                                    <label for="lastName">Last Name</label>
                                    <input defaultValue="Lorens" id="lastName" type="text" />
                              
                                </div>
                            </div>

                            <div className="userProfile__userInfo__email__wrapper">
                           
                                <label for="email">Email Address</label>
                                <input defaultValue="nina.l@gmail.com" id="email" type="text" />
                 
                            </div>

                            <div className="userProfile__userInfo__birthDate__wrapper">
                                <label for="birthDate">Birth Date</label>
                                <input defaultValue="11.06.1998" id="birthDate" type="text" />

                            </div>
                        </div>
                    </div>


                    <div className="userProfile__bottomSection">
                        <button className="dashboard__userProfile__Icon"><img src={UserIcon}></img></button>
                        <button className="dashboard__userFavorites__Icon"> <img src={FavoriteIcon}></img></button>
                        <div className="dashboard__addGroup__button__wrapper__wrapper">
                            <button className="addGroup__button--wrapper userProfile__button__wrapper"><img src={ConfirmIcon} /></button>
                        </div>
                        <button className="dashboard__userHistory__Icon"><img src={HistoryIcon}></img></button>
                        <button className="dashboard__userSettings__Icon"><img src={SettingsIcon}></img></button>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        groups: state.groups,
        users: state.users
    }
}

export default connect(mapStateToProps)(UserProfile);
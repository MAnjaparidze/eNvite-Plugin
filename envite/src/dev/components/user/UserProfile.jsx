import React, { Component } from 'react';
import '../../../css/user/UserProfileCSS.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroupItem from './UserGroupGenerator';
import UserIcon from '../../../assets/nounUser11228000000001.png';
import FavoriteIcon from '../../../assets/nounStar2097830000000.png';
import HistoryIcon from '../../../assets/nounHistory576599000000.png';
import SettingsIcon from '../../../assets/nounSettings1187813000000.png';
import GroupAddIcon from '../../../assets/group2Copy.png';
import StartNewJourneyIcon from '../../../assets/startNewJourneyArrow.png'


class UserProfile extends Component {
    createGroupsDiv = () => {
        return this.props.groups.map((group) => {
            return <GroupItem
                itemKey={group.id}
                groupLetterColor={group.groupLetterColor}
                groupTitle={group.title} groupMembers={group.members}
                goToGroup={this.props.goToGroup}
            />
        });
    }

   
    render() {
        return (
            <div className="dashboard__userProfile__body">
                <div className="dashboard__topSection">
                    <div className="dashboard__userImage__wrapper">
                        <img className="dashboard__userImage" src="https://randomuser.me/api/portraits/women/49.jpg"></img>
                    </div>

                    <span className="dashboard__welcome">Welcome Nina.</span>
                    <span className="dashboard__moto">you're Almost ready to start your</span>
                    <span className="dashboard__moto">shopping date.</span>

                </div>

                <h2 className="dashboard__chats__header">Shopiqa Chats</h2>
                <div className="dashboard__midSection">
                    {this.createGroupsDiv()}
                </div>
                <div className="dashboard__startNewJourney">
                    <span className="dashboard__startNewJourney__description">New Shopping</span>
                    <span className="dashboard__startNewJourney__description">Journey</span>
                    <img className="dashboard__startNewJourney__arrow" src={StartNewJourneyIcon} alt="" />
                </div>

                <div className="dashboard__bottomSection">
                    <button className="dashboard__userProfile__Icon"><img src={UserIcon}></img></button>
                    <button className="dashboard__userFavorites__Icon"> <img src={FavoriteIcon}></img></button>
                    <div className="dashboard__addGroup__button__wrapper__wrapper">
                        <div className="addGroup__button--wrapper" onClick={this.props.addGroup}><img src={GroupAddIcon} /></div>
                    </div>
                    <button className="dashboard__userHistory__Icon"><img src={HistoryIcon}></img></button>
                    <button className="dashboard__userSettings__Icon" onClick={this.props.goToSettings}><img src={SettingsIcon}></img></button>

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
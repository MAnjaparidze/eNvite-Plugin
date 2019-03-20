import React, { Component } from 'react';

import CloseButton from '../parts/CloseButton';


import AddParticipantsTopSection from './addParticipants/addParticipantsTopSection'
import AddParticipantsMidSection from './addParticipants/addParticipantsMidSection'
import GroupChatTopSection from './groupChat/GroupChatTopSection'
import GroupChatMidSection from './groupChat/GroupChatMidSection'
import GroupChatBotSection from './groupChat/GroupChatBotSection'
import GroupSettingsTopSection from './groupSettings/GroupSettingsTopSection'
import GroupSettingsMidSection from './groupSettings/GroupSettingsMidSection'
import GroupSettingsBotSection from './groupSettings/GroupSettingsBotSection'
import NewGroupTopSection from './newGroupChat/NewGroupChatTopSection'
import NewGroupMidSection from './newGroupChat/NewGroupChatMidSection'
import NewGroupBotSection from './newGroupChat/NewGroupChatBotSection'
import GroupMemberBagTopSection from './groupMemberBag/GroupMemberBagTopSection'
import GroupMemberBagMidSection from './groupMemberBag/GroupMemberBagMidSection'

export default class GroupChat extends Component {

    renderGroupChatTopSection = () => {
        if (this.props.state.addGroup) {
            return <NewGroupTopSection 
                        goToProfile={this.props.goToProfile}   
                    />
        }
        if (this.props.state.groupSelected){
            return <GroupChatTopSection 
                        goToProfile={this.props.goToProfile} 
                        groupSettings={this.props.groupSettings}
                    />
        }
        if (this.props.state.groupSettings) {
            return <GroupSettingsTopSection 
                        goToProfile={this.props.goToProfile}
                        toGroup={this.props.toGroup}
                    />
        }
        if (this.props.state.groupMemberBag) {
            return <GroupMemberBagTopSection />
        }
        if (this.props.state.addMember) {
            return <AddParticipantsTopSection 
                        toGroup={this.props.toGroup} 
                    />
        }
    }

    renderGroupChatMidSection = () => {
        if (this.props.state.addGroup) {
            return <NewGroupMidSection />
        }
        if (this.props.state.groupSelected) {
            return <GroupChatMidSection />
        }
        if (this.props.state.groupSettings) {
            return <GroupSettingsMidSection
                        addMember={this.props.addMember}
                        groupMemberBag={this.props.groupMemberBag}
                    />
        }
        if (this.props.state.groupMemberBag) {
            return <GroupMemberBagMidSection  />
        }
        if (this.props.state.addMember) {
            return <AddParticipantsMidSection />
        }
    }

    renderGroupChatBotSection = () => {
        if (this.props.state.addGroup) {
            return <NewGroupBotSection />
        }
        if (this.props.state.groupSelected) {
            return <GroupChatBotSection />
        }
        if (this.props.state.groupSettings) {
            return <GroupSettingsBotSection />
        }
    }

    render() {
        let toggle = "groupChat__container" + (this.props.isExpanded ? ' ' : ' isDisabled')
        return (
            <div id="groupChat__component" className={toggle}>
                <CloseButton toggleWindow={this.props.toggleWindow}  />
                <div className="groupChat__topSection">
                    {this.renderGroupChatTopSection()}
                </div>

                <div className="groupChat__midSection">
                    {this.renderGroupChatMidSection()}
                </div>

                <div className="groupChat__botSection">
                    {this.renderGroupChatBotSection()}
                </div>
            </div>
        )
    }
}

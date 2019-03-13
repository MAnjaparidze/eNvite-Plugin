import React, { Component } from 'react';
import '../../css/GroupItemCSS.css';



export default class GroupItem extends Component {
    divStyle = {
        backgroundImage: this.props.groupLetterColor,
    }
    generateGroupMembers() {
        return this.props.groupMembers.map((member) => {
            return <span className="dashbaord__group__members">{member} </span> 
        });
    }
    render() {
        console.log(this.props.groupMembers.length);
        return (
            <div className="groupTab--wrapper">
                <div className="dashboard__group__icon" style={this.divStyle}><span className="dashboard__group__letter">{this.props.groupTitle.charAt(0).toLowerCase()}</span></div>
                <div className="dashbaord__group__info">
                    <span className="dashboard__group__title">{this.props.groupTitle}</span>
                    <span className="dashbaord__group__members__list">
                        {this.generateGroupMembers(this.props.groupMembers)}
                    </span>
                </div>
            </div>
        )
    }
}




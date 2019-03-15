import React, { Component } from 'react';
import '../../../css/general/ENviteIconCSS.css';
import PluginWindow from './PluginWindow';

export default class ENviteIcon extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="enviteIcon--wrapper" onClick={this.props.toggleWindow}>
                <div src='../../../assets/ovalCopy.png' className="plugInIcon" />
            </div>
        )
    }
}
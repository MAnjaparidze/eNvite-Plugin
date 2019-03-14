import React, { Component } from 'react';
import '../../../css/general/ENviteIconCSS.css';
import PluginWindow from './PluginWindow';

export default class ENviteIcon extends Component {
    state() {
    }
    render() {
        return (
            <div className="enviteIcon--wrapper">
                <img src='../../../assets/eNvoteIcon.png' className="plugInIcon" />
                
                <PluginWindow className="test" />
            </div>
        )
    }
}

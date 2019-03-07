import React, { Component } from 'react';
import '../css/ENviteIconCSS.css';
import PluginWindow from './PluginWindow';

export default class ENviteIcon extends Component {
    state() {
    }
    render() {
        return (
            <div className="enviteIcon--wrapper">
                <img src='../../public/assets/eNviteIcon.png' className="plugInIcon" />
                
                <PluginWindow className="test" />
            </div>
        )
    }
}

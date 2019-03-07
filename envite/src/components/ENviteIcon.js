import React, { Component } from 'react';
import '../css/ENviteIconCSS.css';
import logo from '../images/eNviteIcon.png';
import PluginWindow from './PluginWindow';

export default class ENviteIcon extends Component {
    state() {
    }
    render() {
        return (
            <div className="enviteIcon--wrapper">
                <img src={logo} className="plugInIcon" />
                
                <PluginWindow className="test" />
            </div>
        )
    }
}

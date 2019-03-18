import React, { Component } from 'react';
import '../../../css/general/ENviteIconCSS.css';

export default class ENviteIcon extends Component {
   
    render() {
        return (
            <div className="enviteIcon--wrapper" onClick={this.props.toggleWindow}>
                <div className="plugInIcon" />
            </div>
        )
    }
}

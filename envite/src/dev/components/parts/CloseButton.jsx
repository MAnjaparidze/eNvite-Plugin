import React, { Component } from 'react'

export default class CloseButton extends Component {
  render() {
    return (
        <div className="burger__close__button" onClick={this.props.toggleWindow}>
            <hr className="horizontal__line"></hr>
            <hr className="horizontal__line"></hr>
            <hr className="horizontal__line"></hr>
        </div>
    )
  }
}

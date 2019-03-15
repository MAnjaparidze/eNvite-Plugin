import React, { Component } from 'react';
import './App.css';
import EnviteIcon from './dev/components/general/ENviteIcon';
import PluginWindow from './dev/components/general/PluginWindow';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
    }
  }

  handleToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
    console.log(this.state.isExpanded);
  }
  render() {
    return (
      <div className="App">

     
          <EnviteIcon toggleWindow={this.handleToggle} />

          <PluginWindow isExpanded={this.state.isExpanded} toggleWindow={this.handleToggle} />
     
      </div>
    );
  }
}

export default App;

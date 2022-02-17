import React, { Component } from 'react';

// Component to handle toggling of reports. Will use props from mainContainer
// to render iFrame based on selected button 
class ToggleButton extends Component {
    render() {
        const name = this.props.buttonInfo.name
    
        return <button 
        onClick={this.props.onClick}
        className={this.props.class}
        >{name}</button>;
      }
}

export default ToggleButton;
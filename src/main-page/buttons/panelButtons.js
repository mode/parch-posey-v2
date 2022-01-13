import React, { Component } from 'react';

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
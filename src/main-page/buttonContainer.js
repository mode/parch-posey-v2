import buttonData from './buttons/buttonData.json'
import ToggleButton from './buttons/panelButtons'
import React, { Component } from 'react';
import CSVEXPORT from './buttons/exportCSV';
import PDFEXPORT from './buttons/pdfExport';
import EMBED from './embed/embed.js'

class ButtonContainer extends Component {

  state = {
    activeId: 'Overview',
    param:1001
  }
  handleClick(event, id) {
    console.log(id)
    this.setState({ activeId: event })
  }




    render() {
  
      return     <div><div className="buttonsContainer">
       
      <div></div>
      <div className="toggleEmbeds">
      {buttonData.map((buttonInfo)=>{
          return(
              <ToggleButton buttonInfo={buttonInfo} 
              class={ this.state.activeId === buttonInfo.name ? 'selected': null}
              onClick={ this.handleClick.bind(this, buttonInfo.name) }               
              key={buttonInfo.name}
              ></ToggleButton>
          )
      })}
        </div> 
      <div className="exportButtons">
        <CSVEXPORT></CSVEXPORT>
        <PDFEXPORT></PDFEXPORT>
      </div>

  </div>
      <EMBED param={this.state.param} report={"Overview"} state={this.state.activeId}></EMBED>
      <EMBED param={this.state.param} report={"All Orders"} state={this.state.activeId}></EMBED>
  </div>
    }
  }

export default ButtonContainer;
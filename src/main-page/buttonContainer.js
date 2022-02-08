import buttonData from './buttons/buttonData.json'
import ToggleButton from './buttons/panelButtons'
import React, { Component } from 'react';
import CSVEXPORT from './buttons/exportCSV';
import PDFEXPORT from './buttons/pdfExport';
import EMBED from './embed/embed.js'

class ButtonContainer extends Component {

  state = {
    activeId: 'Overview',
    links:{"All Orders":'',"Overview":""}

  }
  handleClick(event, id) {
    this.setState({ activeId: event })

  }

  handleCSV = (csvLink,reportName)=>{
    let link = this.state.links 

    link[reportName] = csvLink

    this.setState({ links:link})

  }


  
   render() {
      
      console.log(this.state)

      const embedURL = this.props.embedURL;
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
        <CSVEXPORT link={this.state.links} report={this.state.activeId}></CSVEXPORT>
        <PDFEXPORT></PDFEXPORT>
      </div>

  </div>
      <EMBED key={1} param={this.props.account_id} report={this.state.activeId} state={this.state.activeId} csvLinks = {this.state.csvLinks} links={this.handleCSV}></EMBED>
  </div>
    }
  }

export default ButtonContainer;
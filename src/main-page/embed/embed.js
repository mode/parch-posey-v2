import React, { Component } from 'react';

class EMBED extends Component {
    
    render() {
      
        const url = this.props.report === "Overview"?"https://app.mode.com/demo/reports/635ba62f4a21":"https://app.mode.com/demo/reports/cb3fcbd2efeb"
        const state = this.props.state === this.props.report?"active":""
        const urlSrc = `${url}/embed?param_account_id=${this.props.param}`;
        console.log(this.props.report)
        return <iframe className={"iframe" +" " + state} src={urlSrc}></iframe>;
      }
}

export default EMBED;
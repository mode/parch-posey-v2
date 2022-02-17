import React, { Component,useEffect } from 'react';
import axios from 'axios';

// Embed Component that will load the signed URLs 
class EMBED extends Component {
  constructor(props) {
    super(props)
  }
  state= {
    embed:"",
    
  }
  // Function to call embed endpoint in backend to sign URL 
  embedURL = (param,reportName)=>
    axios.post("https://parch-posey-backend.herokuapp.com/mode_embed",{param:param,report:reportName})
    .then(response => {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });

  
  // Once component is loaded, it will get the link and add it to the iFrame
  componentDidMount(){
    const getURL = async () =>{
      const url = await this.embedURL(this.props.param,this.props.report)
      this.setState({embed:url})
    }
    getURL()
    window.addEventListener('message',(e)=>{
      this.props.links(e.data,this.props.report)
    })

  }

  // When component updates, embed link will update to reflect differnt report 
  componentDidUpdate(prevProps) {

    const getURL = async () =>{
      const url = await this.embedURL(this.props.param,this.props.report)
      this.setState({embed:url})
    }
    
    // Typical usage (don't forget to compare props):
    if (this.props.report !== prevProps.report) {
      document.getElementsByClassName('iframe')[0].removeAttribute('src')
      getURL();
    }
  }


    render() {
        const state = this.props.state === this.props.report?"active":"";
        // Inline height set for iFrames
        const height = {"Overview":"1500px","All Orders":"800px"}
        return <iframe className={"iframe" +" " + state} src={this.state.embed} height={height[this.props.report]}></iframe>;
      }
}

export default EMBED;
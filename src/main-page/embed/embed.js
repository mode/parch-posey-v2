import React, { Component,useEffect } from 'react';
import axios from 'axios';

class EMBED extends Component {
  constructor(props) {
    super(props)
  }
  state= {
    embed:"",
    
  }
  embedURL = (param,reportName)=>
    axios.post("http://localhost:3001/mode_embed",{param:param,report:reportName})
    .then(response => {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });

  

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
        const state = this.props.state === this.props.report?"active":""
        return <iframe className={"iframe" +" " + state} src={this.state.embed}></iframe>;
      }
}

export default EMBED;
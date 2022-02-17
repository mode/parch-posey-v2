import React, { Component } from 'react';

class CSVEXPORT extends Component {

  // Component used to generate CSV Export
  componentDidUpdate(prevProps) {
    console.log(prevProps)
    // Check CSV Link from messageBody Object to ensure it is not empty
    // If empty button will be grayed out.
    // Else new link will be added on render of iFrame
    if (this.props.link[this.props.report] !== '') {

      let element = document.getElementById('csv');

      element.classList.remove('unactive');
      let exportURL = "https://app.mode.com" + this.props.link[this.props.report].report_csv_export_path
      element.firstChild.setAttribute("href",exportURL)
    }
  }

    render() {
      
        return <button className="unactive" id='csv'><a href="">CSV Export</a></button>;
      }
}

export default CSVEXPORT;
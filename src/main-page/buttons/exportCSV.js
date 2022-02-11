import React, { Component } from 'react';

class CSVEXPORT extends Component {

  componentDidUpdate(prevProps) {
    console.log(prevProps)
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
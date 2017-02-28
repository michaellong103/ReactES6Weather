import React, { Component } from 'react';
import './tday.scss';

export default class TDay extends React.Component {
  constructor() {
    super()

  }
  render() {
    let fullheight =  280;
    let maxTemp =  70;
    let minTemp =  40;
    let barTopPx = ((maxTemp - this.props.thigh) / (maxTemp - minTemp))  * fullheight ;
    let barHeightPx = ((this.props.thigh - this.props.tlow) / (maxTemp - minTemp))  * fullheight;
    let colorMarker =   ((maxTemp - this.props.thigh) / (maxTemp - minTemp));
    let colorArray  = [ "#00b4e8",
                        "#00b6d8",
                        "#00bca9",
                        "#00b4e8",
                        "#00b6d8",
                        "#00bca9",
                        "#62bf88",
                        "#8bc172",
                        "#a0c267",
                        "#ffc506" ];
    console.log((Math.ceil((100  - (colorMarker * 100))/ 10) * 10) *  .1);
    let barColor = colorArray[(Math.ceil((100  - (colorMarker * 100))/ 10) * 10) *  .1];
  //  console.log(Math.round(this.props.thigh));
    return (
      <div className='tday'>
        <div className='tdaytop'>{this.props.thigh}&#176;</div>
        <div className='tdaygraph'>
            <div className='tdaycolor'  style={{backgroundColor: barColor, marginTop: barTopPx, height: barHeightPx}}></div>
        </div>
        <div className='tdaybottom'>{this.props.tlow}&#176;</div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './tday.scss';
//import FaBeer from 'react-icons/lib/fa/beer'; react-icons/lib/ti
import {TiWeatherPartlySunny, TiWeatherCloudy, TiWeatherSunny, TiWeatherSnow, TiWeatherShower } from 'react-icons/lib/ti/';

export default class TDay extends React.Component {
  constructor() {
    super()
  }
  getIcon(type, cbar){
    console.log(type);
    console.log(cbar);
    var icontyle = {
        'snow':    <TiWeatherSnow        style={{ color: cbar, fontSize: '80' }} />,
        'cloudy':  <TiWeatherCloudy      style={{ color: cbar, fontSize: '80' }}  />,
        'sun':     <TiWeatherPartlySunny style={{ color: cbar, fontSize: '80' }} />,
        'rain':    <TiWeatherShower      style={{ color: cbar, fontSize: '80' }} />,
        'default': <TiWeatherPartlySunny style={{ color: cbar, fontSize: '80' }} />,
      };
      return  (icontyle[type] || icontyle['default']);
  }
  render() {
    let fullheight =  280;
    let maxTemp =  70;
    let minTemp =  30;
    let barTopPx = ((maxTemp - this.props.thigh) / (maxTemp - minTemp))  * fullheight ;
    let barHeightPx = ((this.props.thigh - this.props.tlow) / (maxTemp - minTemp))  * fullheight;
    let colorMarker =   ((maxTemp - this.props.thigh) / (maxTemp - minTemp));
    let colorArray  = [ "#00b4e8",
    "#00c7ff",
    "#00b5e8",
    "#00b6d5",
    "#00bac0",
    "#2bbe9b",
    "#74c07f",
    "#d2c446",
    "#ffc506",
    "#ff9601" ];
    let barColor = colorArray[(Math.ceil((100  - (colorMarker * 100))/ 10) * 10) *  .1];
    return (
      <div className='tday'>
      <div className='tdaydate'>{this.props.ttime}</div>
      <div className='tdaytop'>{this.props.thigh}&#176;</div>
      <div className='tdaygraph'>
      <div className='tdaycolor'  style={{backgroundColor: barColor, marginTop: barTopPx, height: barHeightPx}}></div>
      </div>
      <div className='tdaybottom'>{this.props.tlow}&#176;</div>
      <span >{this.getIcon(this.props.ticon, barColor)}</span>
      </div>
    );
  }
}

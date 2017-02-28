import React, { Component } from 'react';
import './temptool.scss';
import TDay from '../tday/tday.js';
import TC from '../tc/tc';
import WeatherReportData from '../extAjax/weatherReportData';

export default class TempTool extends Component {
  constructor() {
    super()
  }

  render() {
     let w = new WeatherReportData;
    var days = w.weather.wd.daily.data.map(function(day, index){
        if(index < 5){
          return <TDay thigh={Math.round(day.temperatureMax)} tlow={Math.round(day.temperatureMin)} tcolor='red' />
      }
    });

    return (
      <div className='temptool'>
      <TC />
      {days}
      <button onClick={this.assignHighLow}>23</button>
      </div>
    );
  }
}

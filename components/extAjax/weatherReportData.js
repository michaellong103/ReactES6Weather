import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TDay from '../tday/tday.js';

export default class WeatherReportData extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherdata: []
    }
  }
  componentDidMount() {
    darkSkyApi().then(data => {
      // console.log('data');
      // console.log(data);
      this.setState({
        weatherdata: data.daily.data
      });
    })
    const { weatherdata } = this.state;
    var days = this.state.weatherdata.map(function(day, index){
      if(index < 5){
       var t = day.time * 1000;
       let a = new Date(t);
       let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
       let tdate  = months[a.getMonth()] + ' ' + a.getDate().toString();
       console.log(tdate);
       return <TDay ttime={tdate} thigh={Math.round(day.temperatureMax)} tlow={Math.round(day.temperatureMin)}  ticon={day.icon} />
      }
    });
    return <span>
  { days }
    </span>
  }
}

// Steattle
 
const darkSkyApi = () => {
  return fetch(`https://www.rehablinks.org/_dev/phpproxy/index.php?https://api.darksky.net/forecast/e07a7a457fa43398847b9500a72b8cbf/47.609722,-122.333056`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    // console.log(data);
    return data;
  });
}

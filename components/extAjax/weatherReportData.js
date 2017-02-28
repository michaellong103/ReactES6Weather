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
  }

  render() {
    const { weatherdata } = this.state;
    console.log(this.state);
    var days = this.state.weatherdata.map(function(day, index){
      if(index < 5){
       return <TDay thigh={Math.round(day.temperatureMax)} tlow={Math.round(day.temperatureMin)} tcolor='red' />
      }
    });
    return <span>
  { days }
    </span>
  }
}

// Steattle

const darkSkyApi = () => {
  return fetch(`https://www.rehablinks.org/_dev/phpproxy/index.php?https://api.darksky.net/forecast/e07a7a457fa43398847b9500a72b8cbf/37.8267,-122.4233`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    // console.log(data);
    return data;
  });
}

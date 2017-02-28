import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class WeatherReportData extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherdata: []
    }
  }

  componentDidMount() {
    darkSkyApi().then(data => {
      console.log(data);
      this.setState({
        weatherdata: data
      });
    })
  }

  render() {
    const { weatherdata } = this.state;
  //  console.log(weatherdata.daily.data);
    return <div>
    <h1> { weatherdata } </h1>
    </div>
  }
}

// Steattle

const darkSkyApi = () => {
  console.log('b21');
  return fetch(`https://www.rehablinks.org/_dev/phpproxy/index.php?https://api.darksky.net/forecast/e07a7a457fa43398847b9500a72b8cbf/37.8267,-122.4233`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    return data;
  });
}

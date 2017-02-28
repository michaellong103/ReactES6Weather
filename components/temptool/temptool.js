import React, { Component } from 'react';
import './temptool.scss';
import TC from '../tc/tc';

import WeatherReportData  from '../extAjax/weatherReportData';


export default class TempTool extends Component {
  constructor() {
    console.log('TempTool Constructor');
    super()
  }

  render() {

    return (
      <div className='temptool'>
        <TC />
        <WeatherReportData />
      </div>
    );
  }
}

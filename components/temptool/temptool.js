import React, { Component } from 'react';
import './temptool.scss';
import TDay from '../tday/tday.js';
import TC from '../tc/tc';




export default class TempTool extends Component {
  render() {
    return (
      <div className='temptool'>
        <TC />
        <TDay thigh='45' tlow='34' />
        <TDay thigh='45' tlow='38' />
        <TDay thigh='43' tlow='32' />
        <TDay thigh='42' tlow='31' />
        <TDay thigh='41' tlow='32' />
     </div>
    );
  }
}

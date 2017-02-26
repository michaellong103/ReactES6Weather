import React, { Component } from 'react';
import './temptool.scss';
import TGuage from '../tguage/tguage';
import TDay   from '../tday/tday';

export default class TempTool extends Component {
  render() {
    return (
      <div className='temptool'>
            <tguage />
            <tday />
      </div>
    );
  }
}

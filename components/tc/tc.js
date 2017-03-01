import React from 'react';
import './tc.scss';

export default class TC extends React.Component {
  render() {
    return (
      <div className='tc'>
        <div  className='tc-upper-spacer'>HIGH </div>
        <div  className='tc-text-top'>70&#176;</div>
        <div  className='tc-color-scale'>
            <div></div>
        </div>
        <div  className='tc-text-bottom'>30&#176;</div>
        <div  className='tc-bottom-spacer'>LOW</div>
      </div>
    );
  }
}

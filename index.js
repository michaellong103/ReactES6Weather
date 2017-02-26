/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import App from './components/app/app';

require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <App/>, document.getElementById('app')
);

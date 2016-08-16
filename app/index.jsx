import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './components/Resume';
import data from './data/resume.json';

ReactDOM.render(
  <Resume data={data} />,
  document.getElementById('app')
);

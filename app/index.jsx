import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './components/Resume';

ReactDOM.render(
  <Resume url="https://raw.githubusercontent.com/antonpunith/antonpunith.github.com/master/data/resume.json" />,
  document.getElementById('app')
);

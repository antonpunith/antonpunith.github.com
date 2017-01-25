import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './components/Resume';

ReactDOM.render(
  <Resume url="http://antonpunith.github.io/data/resume.json" />,
  document.getElementById('app')
);

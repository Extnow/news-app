import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

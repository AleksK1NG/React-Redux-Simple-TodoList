import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './App';

const rootElement = document.getElementById('root');

render(<App />, rootElement);

if (module.hot) {
  module.hot.accept('./App', () => render(<App />, rootElement));
}
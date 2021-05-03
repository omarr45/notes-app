import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer year='2021' />
  </React.StrictMode>,
  document.getElementById('root')
);

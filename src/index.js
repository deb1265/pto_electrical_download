// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   // Importing CSS for global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Other scripts like service workers or web vitals may follow...


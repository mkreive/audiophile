import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './sass/global.scss';
import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

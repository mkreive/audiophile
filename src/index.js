import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './sass/base/default.scss';
import './sass/base/normalize.scss';
import './sass/base/variables.scss';
import './sass/base/typography.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

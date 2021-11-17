import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './App-Styles';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);


// serviceWorkerRegistration.unregister();

// reportWebVitals();

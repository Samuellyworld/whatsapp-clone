import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './App-Styles';
import reducer, {initialState} from './providers/user/user-reducer';
import { StateProvider } from './providers/user/user-provider';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   
    <GlobalStyle/>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// serviceWorkerRegistration.unregister();

// reportWebVitals();

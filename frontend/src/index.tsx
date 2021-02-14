import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux Setup
import { store } from './store';
import { Provider } from 'react-redux';

// Styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataProvider } from './store/dataContext';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
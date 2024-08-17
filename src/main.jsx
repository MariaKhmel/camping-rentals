import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import './styles/index.css';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  /* </React.StrictMode> */
);

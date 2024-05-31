import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';
import * as cartActions from './store/cart';
import { redirect } from 'react-router-dom';
import * as instrumentActions from './store/instrument'
import * as favoriteActions from './store/favorite'


const store = configureStore();

if (import.meta.env.MODE !== "production") {
  restoreCSRF();
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.redirect = redirect;
  window.instrumentActions = instrumentActions;
  window.cartActions = cartActions;
  window.favoriteActions = favoriteActions;

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


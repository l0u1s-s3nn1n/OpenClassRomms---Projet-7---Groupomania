import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import { getUsers } from './actions/users.actions';


//A enlever en prod
const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getUsers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

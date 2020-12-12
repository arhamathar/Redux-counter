import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './redux/reducers/counter';
import resultsReducer from './redux/reducers/results';
import App from './App';
import './index.css';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

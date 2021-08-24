import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './Store/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { loadState, saveState } from './localstorage';


const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();

const store = createStore(RootReducer, persistedState, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

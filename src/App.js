import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './app/store'

import logo from './logo.svg';
import './App.css';

import { fetchStonksThunk } from './reducers/stonks.thunks';
import { useDispatch } from 'react-redux';
//const redux = require('react-redux');
//const useDispatch = redux.useDispatch;
import { App } from './app/App';

const render = () => {
  //const App = require('./app/App').default

  const dispatch = useDispatch();
  dispatch(fetchStonksThunk);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}

//const fetchStonksThunk = stonksThunk.fetchStonksThunk;
/*
function App() {
  const dispatch = useDispatch();
  const stonks = dispatch(fetchStonksThunk);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { createStore } from 'redux'
import rootReucer from './reducers'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReucer)

store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

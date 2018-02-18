import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Crypto from './components/Crypto';
import CryptoShow from './components/Crypto_Show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/currency/:id" component={ CryptoShow } />
                  <Route path="/" component={ Crypto } />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));

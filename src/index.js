// eslint-disable-next-line no-unused-vars
import HotLoader from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

import App from './components/App';

import store from './store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

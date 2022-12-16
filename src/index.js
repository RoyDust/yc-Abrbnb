import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// Route配置
import { HashRouter } from 'react-router-dom';

import App from '@/App';
// Less和normalize.css配置
import 'normalize.css'
import './assets/css/index.less'
// Redux配置
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Route配置
import { HashRouter } from 'react-router-dom';

import App from '@/App';
// Less和normalize.css配置
import 'normalize.css'
import 'antd/dist/reset.css';
import './assets/css/index.less'

// Redux配置
import { Provider } from 'react-redux';
import store from './store';
// theme配置
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>

);

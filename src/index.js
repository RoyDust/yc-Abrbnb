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
  /*
  需要用Provider包裹起来suspense进行懒加载，否则异步加载js发出的时间不会进行监听
  */
  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>

);

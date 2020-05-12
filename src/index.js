import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import GlobalStyle from './style';
import GlobalStyleFont from '@/assets/fonts/iconfont/iconfont.js';
// import App from '@/view/test/test.jsx';
// import App from '@/component-test/zh-en.js';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <GlobalStyleFont />
    <App />
  </React.Fragment>
  ,
  document.querySelector("#root")
);


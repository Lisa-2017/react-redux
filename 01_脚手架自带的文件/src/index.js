import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 页面性能分析文件 需要web-vitals的支持
import reportWebVitals from './reportWebVitals';

// App 被 React.StrictMode 包裹后, 会对APP以及其所有的子组件进行检查是否合理(比如已经被弃用了的会警告提示)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

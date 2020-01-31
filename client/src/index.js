import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { CreateStore, applyMiddleWare } from 'react';

const store = CreateStore(() => [], applyMiddleWare());

ReactDom.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector("#root")
);

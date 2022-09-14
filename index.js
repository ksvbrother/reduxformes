///////////Solution one//////

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './account'
import SelectingFormValuesForm from "./component/RegisterForm/index";
import store from './store'
import showResults from "./showResults";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore((reducers, composeEnhancers(applyMiddleware())))



const rootEl = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <div>
      <SelectingFormValuesForm onSubmit={showResults} />
      {/* <Values form="selectingFormValues" /> */}

    </div>
  </Provider>,
  rootEl



);



//import { Values } from "redux-form-website-template";
// import store from "./store";

































//solution two////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './component/RegisterForm/index';
// import reducers from './reducer';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('root'));


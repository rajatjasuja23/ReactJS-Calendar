import React from 'react';
import ReactDOM from 'react-dom';
import App from './Calendar.js';
// import { Provider } from 'react-redux'
// import { createStore} from 'redux'
// import todoApp from './reducers';
// import Allreducers from './reducers/Todoreducers/Allreducers.js';


// let store = createStore(Allreducers);

// ReactDOM.render( <Provider store={store}>
//                     <App />
//                 </Provider>, document.getElementById('app'));

 ReactDOM.render( <App/>
, document.getElementById('app'));
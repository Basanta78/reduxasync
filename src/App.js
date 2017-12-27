import React from 'react';
import './App.css';
import axios from "axios";
import {applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from './reducer/reducer';
import * as action from './action/action';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './todo';
import { Provider } from 'react-redux'




const  middleware = applyMiddleware(thunk,logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
dispatch(action.startFetch)
axios.get('http://localhost:8848/api/users')
.then((res) =>{
  console.log(res.data.data)
  dispatch(action.receiveTodo(res.data.data))
  console.log(store.getState());
})
.catch((err) =>{
  dispatch(action.errorTodo(err))
})
})
const App = () => (
  <Provider store ={ store }>
  <Router>
  <Route path = "/test" component = {Todo}/>
  </Router>
  </Provider>
   
)

export default App;

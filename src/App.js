import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from './reducer/reducer'


const  middleware = applyMiddleware(thunk,logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
dispatch({type: "FETCH_TODO_START"})
axios.get('http://localhost:8848/api/users')
.then((res) =>{
  dispatch({type:"RECIEVED_TODO", payload: res.data})

})
.catch((err) =>{
  dispatch({type: "FETCH_TODO_ERR",payload:err})
})
})
class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

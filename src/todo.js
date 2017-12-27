import React from 'react';
import { connect } from 'react-redux';

const Todo = (props) => {
  console.log(props)
  return (
    <div className="App">
      test
    </div>
  );
}
const matchStatetoProps = (state) =>({state})

const Todos = connect(matchStatetoProps)(Todo)
export default Todos;
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

// const TodoItem = ({ name, todo, status, id }) => (
//   <li key={id}>
//     {name}
//     {todo}
//     {status}
//   </li>
// );

const TodoItem = function(props) {
  return (
    <li className={String(props.singleTodo[2])} key={props.singleTodo[3]}>
      <h3>
        {props.singleTodo[0]}
      </h3>
      <p>
        {props.singleTodo[1]}
      </p>
    </li>
  );
};

TodoItem.propTypes = {
  singleTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  // props.singleTodo[1]: PropTypes.string.isRequired,
  // props.singleTodo[2]: PropTypes.string.isRequired,
  // props.singleTodo[3]: PropTypes.string.isRequired,
};

export default TodoItem;

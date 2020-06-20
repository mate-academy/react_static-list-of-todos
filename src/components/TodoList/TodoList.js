/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = props => (
  <ul>
    {
      props.list.map(singleTodo => (
        <TodoItem {...singleTodo} />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoList;

/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = function(props) {
  return props.list.map(singleTodo => (
    <TodoItem singleTodo={singleTodo} />
  ));
};

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoList;

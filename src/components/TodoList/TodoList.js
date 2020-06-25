import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const Todo = props => (
  <ul>
    {props.list.map(todo => <TodoItem key={todo.id} {...todo} />)}
  </ul>
);

Todo.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Todo;

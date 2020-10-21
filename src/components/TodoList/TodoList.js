import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ preparedTodos }) => (
  preparedTodos.map(todo => (
    <Todo {...todo} key={todo.id} />
  ))
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

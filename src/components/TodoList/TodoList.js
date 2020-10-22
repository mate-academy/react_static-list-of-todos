import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import TodoShape from '../../shapes/TodoShape';

const TodoList = ({ preparedTodos }) => (
  preparedTodos.map(todo => (
    <Todo {...todo} key={todo.id} />
  ))
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(TodoShape).isRequired,
};

export default TodoList;

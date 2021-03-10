import PropTypes from 'prop-types';
import React from 'react';
import Todo from '../Todo/Todo';
import { TodoType } from '../TodoType/TodoType';

export default function TodoList({ preparedTodos }) {
  const todoList = preparedTodos.map(todo => (
    <Todo key={todo.id} todo={todo} />
  ));

  return (
    <ul>
      {todoList}
    </ul>
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(TodoType),
};

TodoList.defaultProps = {
  preparedTodos: [],
};

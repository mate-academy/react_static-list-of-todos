import PropTypes from 'prop-types';
import React from 'react';
import Todo from '../Todo/Todo';
import { TodoType } from '../TodoType/TodoType';

export default function TodoList({ todos }) {
  const todoList = todos.map(todo => (
    <Todo key={todo.id} todo={todo} />
  ));

  return (
    <ul>
      {todoList}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType),
};

TodoList.defaultProps = {
  todos: [],
};

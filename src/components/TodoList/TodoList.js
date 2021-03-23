import PropTypes from 'prop-types';
import React from 'react';
import Todo from '../Todo/Todo';
import { TodoType } from '../TodoType/TodoType';
import './TodoList.css';

export default function TodoList({ todos }) {
  return (
    <ul className="list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType),
};

TodoList.defaultProps = {
  todos: [],
};

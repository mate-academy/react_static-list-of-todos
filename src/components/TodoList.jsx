import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos }) => (
  <ul>
    <h1>TodoList</h1>
    {todos.map(todo => (
      <li key={todo.id} className="todo">
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

const TypeTodo = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TypeTodo).isRequired,
};

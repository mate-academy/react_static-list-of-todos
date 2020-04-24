import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../todo/Todo';
import './TodoList.css';

export const TodoList = ({ todos }) => (
  <div className="todo__list">
    {todos.map(todo => (
      <div className="todo__item item " key={todo.id}>
        <Todo {...todo} />
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

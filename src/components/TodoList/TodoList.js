import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <div className="TodoList__todo">
        <Todo {...todo} key={todo.id} />
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

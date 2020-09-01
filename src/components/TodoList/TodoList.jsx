import React from 'react';
import './TodoList.css';

import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export function TodoList({ todos }) {
  return (
    <div className="todolist">
      {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.objectOf(PropTypes.string).isRequired,
  })).isRequired,
};

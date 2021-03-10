import PropTypes from 'prop-types';
import React from 'react';
import './TodoList.scss';

import { Todo } from '../Todo';
import { TodoType } from '../../types';

export function TodoList({ todos }) {
  const renderedList = todos.map(todo => ((
    <Todo
      key={todo.id}
      todo={todo}
    />
  )));

  return (
    <ul className="app__list">
      {renderedList}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    TodoType.isRequired,
  ).isRequired,
};

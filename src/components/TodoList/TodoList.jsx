import PropTypes from 'prop-types';
import React from 'react';
import './TodoList.scss';

import { Todo } from '../Todo';
import { TypeUser } from '../../types';

export function TodoList({ todos }) {
  const renderedList = todos.map((todo) => {
    const { completed, id, title, user } = todo;

    return ((
      <Todo
        key={id}
        completed={completed}
        title={title}
        user={user}
      />
    ));
  });

  return (
    <ul className="app__list">
      {renderedList}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      user: TypeUser,
    }),
  ).isRequired,
};

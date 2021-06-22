import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './Todo';

export const User = ({ name, todosUser }) => (
  <ul>
    <span className="nameStyle">{name}</span>
    {todosUser.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

const TypeTodo = PropTypes.objectOf({
  userId: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

User.propTypes = {
  name: PropTypes.string.isRequired,
  todosUser: TypeTodo.isRequired,
};

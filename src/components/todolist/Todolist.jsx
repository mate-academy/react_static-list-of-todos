import React from 'react';
import PropTypes from 'prop-types';
import './Todolist.scss';

import { Todo } from '../todo/Todo';

export const Todolist = ({ list }) => (
  <ul className="todo-list">
    {list.map(obj => (
      <li key={obj.id}>
        <Todo {...obj} />
      </li>
    ))}
  </ul>
);

Todolist.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
};

Todolist.defaultProps = {
  list: [],
};

import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import { User } from '../User';

export const TodoList = ({ list }) => (
  <ul className="todo-list">
    {list.map(listItem => (
      <li key={listItem.id} className="todo-list__item">
        <User {...listItem} />
        <Todo {...listItem} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  list: [],
};

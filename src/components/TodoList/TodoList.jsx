import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ list }) => (
  <ul className="list list-group list-group-flush">
    {list.map(item => (
      <li
        className="list__item list-group-item bg-secondary bg-gradient"
        key={item.id}
      >
        <Todo {...item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

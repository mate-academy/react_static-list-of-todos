import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ allUser }) => (
  <ul>
    {allUser.map(element => (
      <li className="list" key={element.id}>
        <Todo {...element} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  allUser: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.object.isRequired,
    }),
  ).isRequired,
};

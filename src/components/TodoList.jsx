import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ prepared }) => (
  <ul className="ul">
    {prepared.map(element => (
      <li key={element.id} className="li">
        <Todo {...element} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  prepared: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

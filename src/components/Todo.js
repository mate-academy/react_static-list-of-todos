import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ element: { title, completed, user } }) => (
  <li className="element">
    <p className="title">{title}</p>
    <p>{user.name}</p>
    <>
      {' '}
      {completed
        ? <p className="completed">Completed!</p>
        : <p className="inProgress">in progress...</p>}
    </>
  </li>
);

Todo.propTypes = {
  element: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import PropTypes from 'prop-types';
import React from 'react';
import './Todo.scss';

import { TypeUser } from '../../types';
import { User } from '../User';

export function Todo({
  title,
  completed,
  user,
}) {
  return (
    <li className="app__item">
      <h2>{title}</h2>
      <p>{completed.toString()}</p>
      <User user={user} />
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: TypeUser,
};

Todo.defaultProps = {
  user: {},
};

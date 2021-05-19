import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User/User';

export const Todo = ({
  id,
  user,
  title,
  completed,
}) => (
  <li key={id}>
    <User user={user} />
    <h3>{title}</h3>
    <p>{completed ? 'Completed' : 'In progress'}</p>
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    address: PropTypes.shape({}),
    company: PropTypes.shape({}),
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const ToDo = ({ id, user, title, completed }) => (
  <tr>
    <th>{id}</th>
    <User {...user} />
    <th>{title}</th>
    <th>{completed ? 'Done' : '---'}</th>
  </tr>
);

ToDo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

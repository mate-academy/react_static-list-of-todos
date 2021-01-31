import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

import { UserTypes } from '../../types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <tr>
    <User userData={user} />
    <td className="cell">{title}</td>
    <td
      style={{ backgroundColor: `${completed ? 'greenyellow' : 'red'}` }}
      className="cell"
    >
      {completed ? 'completed' : 'not completed'}
    </td>
  </tr>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserTypes.isRequired,
};

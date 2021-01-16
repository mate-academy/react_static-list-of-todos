import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { UserTypes } from '../../types';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <td>
      {title}
    </td>
    <td className="user-name">
      <User {...user} />
    </td>
    <td className={completed ? 'completed' : 'not-completed'}>
      {completed ? 'Completed' : 'In progress'}
    </td>
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserTypes.isRequired,
};

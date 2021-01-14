import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { TodoTypes } from '../types';

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

Todo.propTypes = PropTypes.objectOf(TodoTypes).isRequired;

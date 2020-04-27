import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <>
    <tr>
      <td className={completed ? 'completed' : 'in-progress'}>{title}</td>

      <User name={user.name} />
    </tr>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf().isRequired,
};

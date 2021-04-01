import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { userType } from '../../types';

export const Todo = ({ title, completed, user }) => (
  <>
    <User user={user} />
    <p className="todo__title">{title}</p>
    {completed
      ? <p style={{ color: 'green' }}>Comleted</p>
      : <p style={{ color: 'red' }}>Not comleted</p>
    }
  </>
);

Todo.propTypes = {
  user: userType,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

Todo.defaultProps = {
  user: {},
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <User name={user} />
    <p className="todo__title">{title}</p>
    {completed
      ? <p style={{ color: 'green' }}>Comleted</p>
      : <p style={{ color: 'red' }}>Not comleted</p>
    }
  </>
);

Todo.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

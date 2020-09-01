import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <input className="toggle" type="checkbox" checked={completed} readOnly />
    {title}
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

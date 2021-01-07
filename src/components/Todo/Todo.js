import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <p>
      <strong>Title:</strong>
      {' '}
      {title}
      {' '}
    </p>
    <p>
      <strong>Completed:</strong>
      {'\n'}
      {`${completed}`}
    </p>
    <p>
      <User {...user} />
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ id, title, completed, user }) => (
  <>
    {id}
    . -
    {title}
    {' '}
    -
    {completed ? 'done' : 'fail'}
    <User {...user} />
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

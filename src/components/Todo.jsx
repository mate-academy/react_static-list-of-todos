import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { TypeUser } from './TypeUser';

export const Todo = ({ todo }) => (
  <>
    {todo.title}
    {' --- '}
    {`${todo.completed}`}
    {' --- '}
    <User user={todo.user} />
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: TypeUser.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ todo }) => (
  <tr>
    <td>{todo.completed ? 'Done' : 'In progress'}</td>
    <td>{todo.title}</td>
    <User name={todo.user.name} />
  </tr>
);

export const ShapeUser = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }),
  }),
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
  }),
});

export const ShapeTodo = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: ShapeUser,
  }).isRequired,
};

Todo.propTypes = ShapeTodo;

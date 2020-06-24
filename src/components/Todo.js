import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ todo }) => (
  <tr>
    <td>{todo.completed ? 'Done' : 'In progress'}</td>
    <td>{todo.title}</td>
    <User user={todo.user} />
  </tr>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
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
    }),
  }).isRequired,
};
export default Todo;

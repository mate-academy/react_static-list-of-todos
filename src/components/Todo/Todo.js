import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';
import './Todo.css';

const Todo = ({ todo }) => (
  <li className="App__item" key={todo.id}>
    {
      `Title: ${todo.title}
        Status: ${todo.completed ? 'completed' : 'uncompleted'}`
    }
    <br />
    <User user={todo.user} />
  </li>
);

export default Todo;

Todo.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.shape({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
};

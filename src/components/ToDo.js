import React from 'react';
import PropTypes from 'prop-types';
import { Users } from './Users';
import './ToDo.css';

export const ToDo = ({ todo }) => (
  <>
    <tr>
      <td className="table-header">Title:</td>
      <td className="table-item">{todo.title}</td>
    </tr>
    <tr>
      <td className="table-header">Completed:</td>
      <td className="table-item">
        {todo.completed ? ('YES') : ('NO')}
      </td>
    </tr>
    <Users user={todo.user} />
  </>
);

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,

      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,

        geo: PropTypes.shape({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        }).isRequired,

        company: PropTypes.shape({
          name: PropTypes.string.isRequired,
          catchPhrase: PropTypes.string.isRequired,
          bs: PropTypes.string.isRequired,
        }).isRequired,

      }).isRequired,

    }).isRequired,
  }).isRequired,
};

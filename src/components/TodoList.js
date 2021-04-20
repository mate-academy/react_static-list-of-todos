import React from 'react';
import PropTypes from 'prop-types';

export const TodoList = ({ preparedTodos }) => (
  <>
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id}>
        <p>{preparedTodo.title}</p>
        <p>{preparedTodo.completed}</p>
        <p>{preparedTodo.user.id}</p>
        <p>{preparedTodo.user.name}</p>
        <p>{preparedTodo.user.email}</p>
        <p>{preparedTodo.user.address.street}</p>
        <p>{preparedTodo.user.address.suite}</p>
        <p>{preparedTodo.user.address.city}</p>
        <p>{preparedTodo.user.address.zipcode}</p>
        <p>{preparedTodo.user.address.geo.lat}</p>
        <p>{preparedTodo.user.address.geo.lng}</p>
        <p>{preparedTodo.user.phone}</p>
        <p>{preparedTodo.user.website}</p>
        <p>{preparedTodo.user.company.name}</p>
        <p>{preparedTodo.user.company.catchPhrase}</p>
        <p>{preparedTodo.user.company.bs}</p>
      </li>
    ))}
  </>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
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
      }).isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

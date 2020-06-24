import PropTypes from 'prop-types';
import React from 'react';
import Todo from './Todo';

const TodoList = ({ preparedTodos }) => (
  <>
    <table border="1" className="table">
      <caption>ToDo List</caption>
      <thead>
        <tr>
          <th>Status</th>
          <th>Title</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {preparedTodos.map(item => (
          <Todo
            todo={item}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
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
  })).isRequired,
};

export default TodoList;

import React from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo/ToDo';

function ToDoList({ todos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
          <th>user</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToDoList;

import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import TodoItem from './TodoItems';

function Todo({ todos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
          <th>User</th>
        </tr>
      </thead>
      {todos.map(item => (<TodoItem todo={item} key={item.id} />
      ))}
    </table>
  );
}

Todo.propTypes = { todos: PropTypes.objectOf(PropTypes.string).isRequired };

export default Todo;

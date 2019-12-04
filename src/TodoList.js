import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <table>
    <tbody>
      <tr>
        <th>todo ID</th>
        <th>todo Title</th>
        <th>User Name</th>
        <th>Status</th>
      </tr>
      {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </tbody>
  </table>
);

TodoList.propTypes = { todos: PropTypes.arrayOf(PropTypes.object).isRequired };

export default TodoList;

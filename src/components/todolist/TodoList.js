import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from '../Todoitem/TodoItems';

const TodoList = ({ todos }) => (

  <table className="container">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>status</th>
        <th>user</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </tbody>
  </table>

);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

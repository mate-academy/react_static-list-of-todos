import React from 'react';
import PropTypes from 'prop-types';
import { typeTodoItem } from '../types';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos }) {
  return (
    <table>
      <th>
        User
      </th>
      <th>
        Task
      </th>
      <th>
        Status
      </th>
      {todos.map(item => (
        <TodoItem
          title={item.title}
          completed={item.completed}
          user={item.user}
        />
      ))}
    </table>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    typeTodoItem,
  ).isRequired,
};

export default TodoList;

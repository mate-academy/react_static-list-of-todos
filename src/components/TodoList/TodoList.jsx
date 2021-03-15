import React from 'react';
import PropTypes from 'prop-types';
import { TypeTodoItem } from '../types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList({ todos }) {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          <td>Task</td>
          <td>Status</td>
          <td>Name</td>
        </tr>
      </thead>
      <tbody className="table__body">
        {todos.map(item => (
          <TodoItem
            key={item.id}
            title={item.title}
            completed={item.completed}
            user={item.user}
          />
        ))}
      </tbody>
    </table>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TypeTodoItem.isRequired).isRequired,
};

export default TodoList;

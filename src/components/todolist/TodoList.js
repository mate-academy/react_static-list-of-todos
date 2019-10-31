import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todoitem/TodoItem';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <table className="todo-list">
      <thead className="todo-list__head">
        <th>Title</th>
        <th>Name</th>
        <th>Status</th>
      </thead>
      <tbody>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </tbody>
    </table>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default TodoList;

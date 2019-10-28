import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ todos }) {
  return (
    <div className="container-table">
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Name</td>
            <td>Email</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
        </tbody>
      </table>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

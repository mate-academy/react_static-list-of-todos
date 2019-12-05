import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (

  <table className="Table">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>complete</th>
        <th>user</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </tbody>
  </table>
);

TodoList.propTypes = { todos: PropTypes.string.isRequired };

export default TodoList;

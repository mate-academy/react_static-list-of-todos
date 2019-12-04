import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todoItem/todoItem';

const TodoList = ({ todoList }) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {todoList.map(item => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes
  = { todoList: PropTypes.arrayOf(PropTypes.object).isRequired };

export default TodoList;

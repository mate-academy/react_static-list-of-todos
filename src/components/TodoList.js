import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todosList }) => (
  <table className="table table-bordered">
    <thead className="thead-dark">
      <tr>
        <th>ID</th>
        <th scope="col">Name</th>
        <th scope="col">Todo</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {todosList.map(item => <TodoItem key={item.id} todo={item} />)}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todosList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default TodoList;

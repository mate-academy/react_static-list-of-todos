import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ list }) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Description</th>
        <th>Is completed?</th>
        <th>Responsible person</th>
      </tr>
    </thead>
    <tbody>
      {list.map(todo => <TodoItem key={todo.id} item={todo} />)}
    </tbody>
  </table>
);

TodoList.propTypes = { list: PropTypes.arrayOf(PropTypes.any).isRequired };

export default TodoList;

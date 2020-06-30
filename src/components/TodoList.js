import PropTypes from 'prop-types';
import React from 'react';
import { Todo } from './Todo';
import { ShapeUser } from './Shapes';

const TodoList = ({ preparedTodos }) => (
  <>
    <table border="1" className="table">
      <caption>ToDo List</caption>
      <thead>
        <tr>
          <th>Status</th>
          <th>Title</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {preparedTodos.map(item => (
          <Todo
            todo={item}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  </>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: ShapeUser,
  })).isRequired,
};

export default TodoList;

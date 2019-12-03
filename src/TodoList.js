import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ list }) => (
  <table className="todo">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Complete</th>
        <th>User</th>
      </tr>
    </thead>
    <tbody>
      {list.map(todoItem => <TodoItem todo={todoItem} />)}
    </tbody>
  </table>
);

TodoList.propTypes = { list: PropTypes.arrayOf(PropTypes.object) };
TodoList.defaultProps = {
  list: [
    {
      id: 'noId',
      title: 'noTitle',
      completed: 'noStatus',
      user: { name: 'noUser' },
    },
  ],
};

export default TodoList;

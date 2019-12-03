import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => (
  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.completed ? 'true' : 'false'}</td>
    <User user={todo.user} />
  </tr>
);

TodoItem.propTypes = { todo: PropTypes.objectOf(PropTypes.any) };
TodoItem.defaultProps = {
  todo: [
    {
      id: 'noId',
      title: 'noTitle',
      completed: 'noStatus',
      user: { name: 'noUser' },
    },
  ],
};

export default TodoItem;

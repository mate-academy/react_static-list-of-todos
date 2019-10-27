import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => (
  <tr>
    <td>{todo.title}</td>
    <User user={todo.user} />
    {todo.completed ? (
      <td positive>
        Approved
      </td>
    ) : (
      <td negative>
        In procces
      </td>
    )
    }
  </tr>
);

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

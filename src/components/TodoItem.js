import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => {
  const { id, user, title, completed } = todo;

  return (
    <tr>
      <td>{id}</td>
      <User user={user} />
      <td className="text-left">{title}</td>
      {completed
        ? <td className="bg-success">Done</td>
        : <td className="bg-danger">Don&rsquo;t do</td>
      }
    </tr>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;

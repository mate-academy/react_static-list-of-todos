import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import '../../App.css';

function Todo({ todo }) {
  const { user, title, completed } = todo;

  return (
    <tr>
      <User user={user} />
      <td className="tableCell">{title}</td>
      <td className="tableCell">{completed ? 'Done' : 'Don\'t do'}</td>
    </tr>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import '../../App.css';

function Todo({ todoLine }) {
  return (
    <tr>
      <User user={todoLine.user} />
      <td className="tableCell">{todoLine.title}</td>
      <td className="tableCell">{todoLine.completed ? 'Done' : 'Don\'t do'}</td>
    </tr>
  );
}

Todo.propTypes = {
  todoLine: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <tr>
      <td className="cell"><User todo={user} /></td>
      <td className="cell">{title}</td>
      <td className="cell">{`${completed}`}</td>
    </tr>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.object,
    title: PropTypes.string,
    completed: PropTypes.string,
  }).isRequired,
};

export default Todo;

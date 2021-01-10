import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';

const Todo = ({ title, completed, user }) => (
  <>
    <User user={user} />
    <td>{title}</td>
    <td>{completed ? 'Done' : 'In progress'}</td>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;

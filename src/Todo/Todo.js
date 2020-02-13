import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ object }) => (
  <tr>
    <User userObject={object.user} />
    <td>{object.title}</td>
    <td>{object.completed ? 'Done' : 'In process'}</td>
  </tr>
);

Todo.propTypes = {
  object: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ title, completed, user }) => (
  <>
    <User className="box__cell" user={user} />
    <td className="box__cell">{title}</td>
    <td className="box__cell">{completed ? 'Done' : 'Not yet'}</td>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Todo;

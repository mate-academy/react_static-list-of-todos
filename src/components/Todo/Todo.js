import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

function Todo({ title, user }) {
  return (
    <>
      <h3 className="todo__title">
        {title}
      </h3>
      <User user={user} />
    </>
  );
}

export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
};

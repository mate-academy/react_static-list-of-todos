import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

const Todo = ({ todo: { title, completed, user } }) => (
  <>
    <User user={user} />
    <p className="todo__title">
      {title}
    </p>
    {completed
      ? <span className="todo__completed todo__completed--success" />
      : <span className="todo__completed todo__completed--danger" />
    }
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default Todo;

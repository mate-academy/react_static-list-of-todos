import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ title, completed, user }) => (
  <>
    <div className="title">
      {title}
    </div>
    <div className="todo-status">
      {completed
        ? 'Completed'
        : (
          <div className="todo-status todo-status-uncompleted">
            Uncompleted
          </div>
        )}
    </div>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};

export default Todo;

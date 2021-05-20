import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import User from '../User/User';

const TodoList = ({ completed, title, user }) => (
  <div className="todo">
    <div className="title">
      {title}
    </div>

    <div className="todo-status">
      {completed ? 'Completed' : 'Uncompleted'}
    </div>

    <User {...user} />

  </div>
);

TodoList.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoList;

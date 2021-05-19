import React from 'react';
import './Todo.scss';
import User from "../User/User";
import PropTypes from 'prop-types';

function Todo({title, completed, user}) {
  return (
    <>
      <User {...user}/>
      <p className="todoTitle">
        <span>Task: {title}</span>
      </p>

      <span className="todoCompleted">
         {completed ? '➖' : '➕'}
      </span>
    </>
  )
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;

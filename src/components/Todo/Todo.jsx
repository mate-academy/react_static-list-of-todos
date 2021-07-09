import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

function Todo({ title, completed, user }) {
  return (
    <>
      <div>
        <div className="todoTitle">
          {title}
        </div>
        <div className="completed">
          {completed ? 'completed' : 'no-completed'}
        </div>
        <div>
          <User {...user} />
        </div>

      </div>
    </>

  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};

export default Todo;

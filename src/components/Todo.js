import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import './Todo.scss';

function Todo({ task }) {
  return (
    <div className="todo">
      <p>
        {`Task: ${task.title}`}
      </p>
      <p>
        {`Status: ${task.completed ? 'done' : 'not done'}`}
      </p>

      <User user={task.user} />
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  task: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape(),
  }).isRequired,
};

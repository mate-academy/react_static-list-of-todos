import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

function Todo({ todo }) {
  return (
    <>
      <div>
        <div className="todoTitle">
          {todo.title}
        </div>
        <div className="completed">
          {todo.completed ? 'completed' : 'no-completed'}
        </div>
        <div>
          <User user={todo.user} />
        </div>

      </div>
    </>

  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Todo;

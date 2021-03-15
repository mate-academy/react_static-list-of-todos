import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import User from '../User/User';

function Todo({ todoItem }) {
  return (
    <div className="todoItem">
      <div className="todoItem__title">
        {todoItem.title}
      </div>
      <div className="todoItem__isCompleted">
        {todoItem.completed ? 'true' : 'false'}
      </div>
      <User user={todoItem.user} />
    </div>
  );
}

Todo.propTypes = {
  todoItem: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default Todo;

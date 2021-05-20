import React from 'react';
import PropTypes from 'prop-types';

function TodoList({ completed, title, user }) {
  if (completed === true) {
    return (
      <div className="todo">
        <div className="title">
          {title}
        </div>

        <div className="todo-completed"> Completed </div>

        <div className="user-name">
          {user.name}
        </div>
      </div>
    );
  }

  return (
    <div className="todo">
      <div className="title">
        {title}
      </div>
      <div className="todo-uncompleted"> Uncompleted </div>
      <div className="user-name">
        {user.name}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoList;

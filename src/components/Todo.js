import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default Todo;

function Todo({ todo }) {
  return (
    <>
      <p className="todo__text">{todo.title}</p>
      {todo.completed
        ? <p className="todo__completed">ready</p>
        : <p className="todo__completed">do not ready</p>}
      <User user={todo.user} />
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

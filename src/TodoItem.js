import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => {
  let result = '';
  let resultColor = '';

  result = todo.completed ? 'Completed' : 'Not Completed';
  resultColor = todo.completed ? 'result-done' : 'result-not-done';

  return (
    <li className="list-item">
      {todo.title}
      <p className={resultColor}>
        {result}
      </p>
      <User user={todo.user} />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.object,
  }).isRequired,
};

export default TodoItem;

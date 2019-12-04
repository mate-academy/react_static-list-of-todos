import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = (props) => {
  let result = '';
  let resultColor = '';

  result = props.todo.completed ? 'Completed' : 'Not Completed';
  resultColor = props.todo.completed ? 'result-done' : 'result-not-done';

  return (
    <li className="list-item">
      {props.todo.title}
      <p className={resultColor}>
        {result}
      </p>
      <User user={props.todo.user} />
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

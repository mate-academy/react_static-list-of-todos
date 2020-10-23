import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (
  <>
    <h4 className="title">{`${todo.id} ${todo.title}`}</h4>
    {todo.completed
      ? (<span className="progress progress__complete">Done</span>)
      : (<span className="progress progress__not-complete">Not done</span>)
    }
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

function Todo({ todo }) {
  return (
    <>
      <h4 className="title">{`${todo.id}. ${todo.title}`}</h4>
      {todo.completed
        ? (<span className="complete">done</span>)
        : (<span className="incomplete">not done</span>)
      }
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

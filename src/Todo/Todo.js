import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ todo }) => (
  <>
    <div className="singleCard__mission">
      <span className="bold">Mission: </span>
      {todo.title}
    </div>
    <User {...todo.userId} />
    <div className="singleCard__status">
      <span className="bold">Actual status: </span>
      {todo.completed === true
        ? <span className="completed">Completed</span>
        : <span className="inProcess">In Process</span>}
    </div>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userId: PropTypes.object.isRequired.propTypes,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import User from '../User/User';

function Completed() {
  return (
    <span className="completed">
      Completed
    </span>
  );
}

function NotCompleted() {
  return (
    <span className="notCompleted">
      Not completed
    </span>
  );
}

function Todo({ prop: { title, completed, user } }) {
  return (
    <>
      <h4 className="title">
        {title}
      </h4>
      <p className="completed">
        {completed === true ? <Completed /> : <NotCompleted />}
      </p>
      <p className="user">
        <User user={user} />
      </p>
    </>
  );
}

export default Todo;

Todo.propTypes = {
  prop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

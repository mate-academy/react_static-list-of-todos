import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

function Todo({ user, title, completed }) {
  const status = completed
    ? <div className="in_progress"> In Progress </div>
    : <div className="completed"> Completed </div>;

  return (
    <>
      <User {...user} />
      <div className="title">{title}</div>
      <p>{status}</p>
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,

};
export default Todo;

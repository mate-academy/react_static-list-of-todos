import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import './Todo.css';

function Todo({ user, title, completed }) {
  const status = completed
    ? <div className="item__status_active"> Not ready </div>
    : <div className="item__status"> Done </div>;

  return (
    <>
      {status}
      <div className="item__todo">{title}</div>
      <User {...user} />
    </>
  );
}

export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};

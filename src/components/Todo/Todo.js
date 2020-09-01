import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import User from '../User/User';

function Todo({ id, title, completed, user }) {
  return (
    <div className="card">
      <p>{id}</p>
      {title}
      <User {...user} />
      {completed
        ? <p className="active">Done</p>
        : <p className="disable">Not done</p>
      }
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Todo;

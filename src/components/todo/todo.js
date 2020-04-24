import React from 'react';
import PropTypes from 'prop-types';
import User from '../user';
import './todo.css';

const Todo = ({ id, title, user, completed }) => {
  let classTodo = 'card';
  const complete = completed ? ' bg-primary text-white' : ' border-danger';

  classTodo += complete;

  return (
    <div className={classTodo}>
      <div className="card-header card-id">{id}</div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <User {...user} />
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  completed: PropTypes.string.isRequired,
};

export default Todo;

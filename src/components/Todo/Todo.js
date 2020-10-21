import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.scss';

const Todo = ({ title, user, completed }) => (
  <section className="card">
    <div className="card__info">
      <p className="card__task">
        Task:
        {' '}
        {title}
      </p>
      <p className="card__user">
        User:
        {' '}
        <User name={user.name} />
      </p>
    </div>
    {completed
      ? (
        <div className="card__status card__status_completed">
          Completed
        </div>
      )
      : (
        <div className="card__status card__status_uncompleted">
          Not Completed
        </div>
      )
    }
  </section>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import User from '../User/User';
import './Todo.scss';

function Todo({ user, title, completed }) {
  return (
    <>
      <div className="Todo__column">
        <div className={classNames('Todo__status', {
          'Todo__status--completed': completed,
        })}
        />
        <span className="Todo__title">
          {title}
        </span>
      </div>
      <div className="Todo__column">
        <User name={user.name} />
      </div>
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;

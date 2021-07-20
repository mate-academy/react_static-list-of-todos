import React from 'react';
import classNames from 'classnames';
import { User } from '../User/User';
import { TodoPropTypes } from '../TodoPropTypes';
import './Todo.css';

export const Todo = function Todo({ title, completed, user, id }) {
  return (
    <React.Fragment key={id}>
      <span className="ms-2 me-auto">
        {'Action: '}
        <p className="fw-bold">
          {'"'}
          {title}
          {'"'}
        </p>
        {' '}
      </span>

      <p className={classNames((completed
        ? 'completed'
        : 'notCompleted'),
      'btn', 'btn-primary')}
      >
        <span className="badge bg-secondary rounded-pill">
          {'Action '}
        </span>
        <span className="completionStatus">
          {completed ? 'is already completed' : 'is not completed yet'}
        </span>
        {' '}
      </p>

      <p>
        <User name={user.name} />
      </p>
    </React.Fragment>
  );
};

Todo.propTypes = TodoPropTypes;

import React from 'react';
import { User } from '../User/User';
import './Todo.css';
import classNames from 'classnames';

export const Todo = ({title, completed, user, id}) => {
  return (
    <React.Fragment key={id}>
      <span className="ms-2 me-auto">
        {'Action: '}
        <span className="fw-bold">
          {'"'}
          {title}
          {'"'}
        </span>
        {' '}
      </span>

      <span className={classNames((completed ? 'completed' : 'notCompleted'), 'btn', 'btn-primary')}
      >
        <span className="badge bg-secondary rounded-pill">{'Action '}</span>
        <span className='completionStatus'>{completed ? 'is already completed' : 'is not completed yet'}</span>
        {' '}
      </span>

      <span>
        <User name={user.name}/>
      </span>
    </React.Fragment>
  );
}

import React from 'react';

import { User } from './userComponent';
import { userPropTypes, taskPropTypes } from './propTypesVars';

export function Todo({ task }) {
  const { title, completed, user } = task;

  return (
    <>
      <h2>{title}</h2>
      Status:
      {' '}
      {(completed) ? 'Complete' : 'In progress'}
      <p>
        User:
        {' '}
        <User {...user} />
      </p>
    </>
  );
}

Todo.propTypes = {
  task: taskPropTypes.isRequired,
  user: userPropTypes.isRequired,
}.isRequired;

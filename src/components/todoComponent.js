import React from 'react';
import PropTypes from 'prop-types';

import { User } from './userComponent';
import { userNameProp, taskTypes } from './propTypesVars';

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
  task: PropTypes.shape({
    ...taskTypes.isRequired,
    user: PropTypes.shape(userNameProp).isRequired,
  }.isRequired).isRequired,
};

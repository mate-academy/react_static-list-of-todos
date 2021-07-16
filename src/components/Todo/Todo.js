import React from 'react';
import propTypes from 'prop-types';

import { User } from '../User';

export function Todo({ title, completed, user }) {
  return (
    <>
      <h4>
        {`Task: ${title}`}
      </h4>
      <p>
        Status:
        {completed ? ` Done` : ` In progress`}
      </p>
      <User {...user} key={user.id} />
    </>
  );
}

Todo.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  user: propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired,
};

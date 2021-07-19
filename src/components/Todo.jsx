import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <>
    <h2>
      {`Title: ${title}`}
    </h2>
    {`Completed status: ${completed ? 'YES' : 'NOT NOW'}`}
    <p>
      <User {...user} />
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

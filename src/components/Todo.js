import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export function Todo({ title, completed, user }) {
  return (
    <>
      <div>
        <User {...user} />
        <p>{title}</p>
        <p>{completed ? 'true' : 'false'}</p>
      </div>
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Todo;

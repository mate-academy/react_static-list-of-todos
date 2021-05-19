import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

import User from '../User/User';

const Todo = function({ title, completed, user }) {
  return (
    <>
      <span>
        {`Task: ${title} --- `}
      </span>
      <span className={completed ? 'finished' : 'unfinished'}>
        {completed}
      </span>
      <User {...user} />
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Todo;

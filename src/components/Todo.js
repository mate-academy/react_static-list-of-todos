import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo({ title, completed, user }) {
  return (
    <>
      <p className="todoTitle">
        <span>
          Todo:
          {' '}
          {title}
        </span>
      </p>

      <span className="completedTodo">
        Is it completed?:
        {' '}
        {completed ? 'yes' : 'no'}
      </span>
      <br />
      <User {...user} />
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({}).isRequired,
};

export default Todo;

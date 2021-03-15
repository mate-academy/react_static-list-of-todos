import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import User from './User';

function Todo({ title, completed, user }) {
  return (
    <>
      <h2 className={
        classNames('todos__title',
          { todos__completed: completed })}
      >
        {title}
      </h2>
      <User {...user} />
    </>
  );
}

export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf().isRequired,
};

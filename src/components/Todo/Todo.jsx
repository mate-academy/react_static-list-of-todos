import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';

function Todo({ title, completed, userId }) {
  return (
    <>
      <h2 className="card__title">{title}</h2>
      <p>{`Status: ${completed ? 'completed' : 'in progress'}`}</p>
      <User id={userId} />
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  userId: PropTypes.number.isRequired,
};

Todo.defaultProps = {
  completed: false,
};

export default Todo;

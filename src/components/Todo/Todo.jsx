import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

const Todo = function({ title, completed }) {
  const statusBool = completed;

  const status = statusBool ? 'finished' : 'unfinished';

  return (
    <>
      <span>
        {`Task: ${title} --- `}
      </span>
      <span className={status}>
        {`${completed}`}
      </span>
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;

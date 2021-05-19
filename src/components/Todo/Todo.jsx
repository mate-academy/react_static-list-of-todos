import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => {
  const bool = completed;
  const color = bool ? 'color-true' : 'color-false';

  return (
    <>
      <div className="title">
        {title}
      </div>
      <div className={color}>
        {`${completed}`}
      </div>
      <div>
        <User {...user} />
      </div>
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};

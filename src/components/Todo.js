import React from 'react';
import PropTypes from 'prop-types';

import { User } from './User/User';

export const Todo = ({ todo }) => (
  <div>
    {todo.title}
    , Completed:
    {` ${todo.completed.toString()}`}
    ,
    <User user={todo.user} />
  </div>
);

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
};

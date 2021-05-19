import React from 'react';
import PropType from 'prop-types';

import { User } from '../User/User';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = ({ todo }) => (
  <div className="todo-list">
    <User {...todo} />
    <Todo {...todo} />
  </div>
);

TodoList.propTypes = {
  todo: PropType.shape().isRequired,
};

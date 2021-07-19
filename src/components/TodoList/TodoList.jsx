import React from 'react';
import PropTypes from 'prop-types';

import { TodoType } from '../../types';
import { Todo } from '../Todo';

import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <div className="list">
    {todos.map(item => (
      <Todo {...item} key={item.id} />
    ))}
  </div>
);

TodoList.propTypes = {
  todo: PropTypes.arrayOf(TodoType).isRequired,
};

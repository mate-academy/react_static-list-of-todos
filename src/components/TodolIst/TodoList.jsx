import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';
import { TodoPropTypes } from '../Todo/TodoPropTypes';

export const TodoList = ({ DataName }) => (
  <div className="TodoList">
    {DataName.map(item => <Todo key={item.id} {...item} />)}
  </div>
);

TodoList.propTypes = {
  DataName: PropTypes.arrayOf(PropTypes.shape(TodoPropTypes)).isRequired,
};

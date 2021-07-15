import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';
import { TodoPropTypes } from '../Todo/TodoPropTypes';

export const TodoList = props => (
  <div className="TodoList">
    {props.props.map(x => <Todo key={x.id} {...x} />)}
  </div>
);

TodoList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape(TodoPropTypes)).isRequired,
};

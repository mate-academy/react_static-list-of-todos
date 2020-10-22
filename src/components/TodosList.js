import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import { TodoShape } from './Shapes/TodoShape';

export const TodosList = ({ todosList }) => (
  <ul className="list">
    {
      todosList.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))
    }
  </ul>
);

TodosList.propTypes = {
  todosList: PropTypes.arrayOf(TodoShape).isRequired,
};

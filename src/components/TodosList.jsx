import React from 'react';
import PropTypes from 'prop-types';
import { TodoPropsType } from './TodoPropsType';
import { Todo } from './Todo';

export const TodosList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </>
);

TodosList.propTypes = {
  todos: PropTypes.shape(TodoPropsType).isRequired,
};

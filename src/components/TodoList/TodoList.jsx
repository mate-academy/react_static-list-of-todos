import React from 'react';
import { Todo } from '../Todo';
import PropTypes from 'prop-types';
import { TodoType } from '../../types'

export const TodoList = ({ todos }) => {
  return (
  todos.map(todo => 
    <Todo
      key={todo.id}
      title={todo.title}
      completed={todo.completed}
      user={todo.user}
    />
  )
)

};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType)
}

TodoList.defaultProps = {
  todos: [],
}

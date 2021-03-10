import React from 'react';
import { Todo } from '../Todo';
import PropTypes from 'prop-types';
import { TodoType } from '../../types'
import './TodoList.scss';

export const TodoList = ({ todos }) => {
  return (
    <ul className="list">
      {todos.map(todo => 
        <li key={todo.id} className="list__item">
          <Todo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      )}
    </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType)
}

TodoList.defaultProps = {
  todos: [],
}

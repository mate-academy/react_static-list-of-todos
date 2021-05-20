import React from 'react';
import { Todo } from '../Todo';
import PropTypes from 'prop-types';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
    <div className="todos-list">
      {todos.map(todo => ( 
        <Todo {...todo} key={todo.id} />
        ))}
    </div>
  );

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
}

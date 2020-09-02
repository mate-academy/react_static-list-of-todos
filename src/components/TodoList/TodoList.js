import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <>
    <div className="TodoList">
      <div className="TodoList__N">N</div>
      <div className="TodoList__name">Name</div>
      <div className="TodoList__todo">Todo</div>
      <div className="TodoList__done">Done</div>
    </div>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
      />
    ))}
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

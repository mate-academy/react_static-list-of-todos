import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './Todolist.css';

const TodoList = ({ todos }) => (
  todos.map(todo => (
    <div className="todo-list" key={todo.id}>
      <Todo todo={todo} />
    </div>
  ))
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    }).isRequired,
  ).isRequired,
};

export default TodoList;

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todoList }) => (
  <>
    <h1>Static list of todos</h1>
    <ul className="todo_list">
      {todoList.map(todo => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TodoList;

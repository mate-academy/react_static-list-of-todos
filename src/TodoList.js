import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <ol>
    {todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
  </ol>
);

TodoList.propTypes = { todos: PropTypes.arrayOf(PropTypes.object).isRequired };

export default TodoList;

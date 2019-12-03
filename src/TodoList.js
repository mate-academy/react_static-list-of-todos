import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <dl>
    {todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
  </dl>
);

TodoList.propTypes
  = { todos: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default TodoList;

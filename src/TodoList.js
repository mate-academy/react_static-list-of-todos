import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = props => (
  <ol>
    {props.todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
  </ol>
);

TodoList.propTypes = { todos: PropTypes.arrayOf(PropTypes.object).isRequired };

export default TodoList;

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todosWithUser: todos }) {
  return (
    <>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))
      }
    </>
  );
}

TodoList.propTypes = {
  todosWithUser: PropTypes.instanceOf(Array).isRequired,
};

export default TodoList;

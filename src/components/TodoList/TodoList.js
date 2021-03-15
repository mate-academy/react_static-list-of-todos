import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(todo => (
        <li className="Todo" key={todo.id}>
          <Todo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;

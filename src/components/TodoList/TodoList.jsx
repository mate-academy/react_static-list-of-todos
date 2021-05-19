import React from 'react';
import Todo from "../Todo/Todo";
import './TodoList.scss';
import PropTypes from 'prop-types';

function TodoList({todos}) {
  return (
    <ul className="todoList">
        {todos.map(todo => (
          <li className="todoInfo" key={todo.id}>
            <Todo {...todo} />
          </li>
        ))}

    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;

import React from 'react';
import Todo from "../Todo/Todo";
import './TodoList.scss';
import PropTypes from 'prop-types';

function TodoList({todos}) {
  return (
    <ul className="todoList">
        {todos.map(todo => (
          <li className="todoInfo">
            <Todo {...todo} key={todo.id}/>
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

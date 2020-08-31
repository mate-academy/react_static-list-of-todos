import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import './TodoList.css';

function TodoList({ prepearedTodos }) {
  return (
    <ul className="todoList">
      {prepearedTodos.map(el => <Todo key={Math.random() * 10} todo={el} />)}
    </ul>
  );
}

TodoList.propTypes = {
  prepearedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

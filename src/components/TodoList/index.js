import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import './TodoList.css';

function TodoList({ prepearedTodos }) {
  return (
    <ul className="todoList">
      {prepearedTodos.map(el => <Todo key={el.id} todo={el} />)}
    </ul>
  );
}

TodoList.propTypes = {
  prepearedTodos: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TodoList;

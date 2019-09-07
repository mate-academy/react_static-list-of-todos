import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem,';

function TodoList({ todos }) {
  return (
    <div className="todolist">
      {todos.map(item => <TodoItem todo={item} key={item.id} />)}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import User from './User';

const TodoList = ({ currenttodos }) => (
  <div>
    {currenttodos.map(todo => (
      <div>
        <TodoItem todo={todo} />
        <User user={todo.userPrepare} />
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  currenttodos: PropTypes.arrayOf({
    todo: PropTypes.shape({
      userPrepare: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TodoList;

import React from 'react';
import Todo from '../Todo/Todo';
import PropTypes from 'prop-types';


const TodoList  = ({todos}) =>  (
  <ul className="users-list">
    {todos.map(todo => (
      <li key = {todo.id}>
        <Todo todo = {todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isReqired,
    })
  )
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList;

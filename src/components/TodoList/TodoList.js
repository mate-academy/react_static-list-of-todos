import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import Todo from '../Todo/Todo';
import './Todolist.css';

function TodoList({ data }) {
  return (
    <ul className="list">
      {data.map(todo => (
        <li key={todo.id}>
          <Todo elem={todo} />
          <User info={todo.user} />
        </li>
      ))}
    </ul>
  );
}

TodoList.defaultProps = {
  data: [],
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

export default TodoList;

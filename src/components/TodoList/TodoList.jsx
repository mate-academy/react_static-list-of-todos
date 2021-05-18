import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, users }) => (
  <section className="todos">
    <h1 className="todos-title">Todos List</h1>
    <div className="todos-list">
      {todos.map(todo => (
        <Todo
          todo={todo}
          user={users.find(user => user.id === todo.userId)}
          key={todo.id}
        />
      ))}
    </div>
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TodoList;

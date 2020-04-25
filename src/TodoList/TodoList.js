import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ prepTodos }) => (
  <div className="cards">
    {prepTodos.map(todo => (
      <div className="singleCard" key={todo.id}>
        <Todo todo={todo} />
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TodoList;

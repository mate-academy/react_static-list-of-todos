import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ preparedTodos }) => (
  <table className="table">
    <tr>
      <th className="cell cell--head">Name</th>
      <th className="cell cell--head">Title</th>
      <th className="cell cell--head">completed</th>
    </tr>
    {preparedTodos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </table>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf({
    todo: PropTypes.object,
  }).isRequired,
};

export default TodoList;

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todoItem/TodoItem';

function TodoList(props) {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Завдання</th>
          <th>Відповідальний</th>
          <th>Процес</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(todo => <TodoItem todo={todo} />)}
      </tbody>
    </table>
  );
}

TodoList.propTypes = {
  todos: PropTypes.isRequired,
};

export default TodoList;

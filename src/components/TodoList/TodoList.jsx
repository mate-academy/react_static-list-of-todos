import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul className="TodoList">
    {preparedTodos.length ? (
      preparedTodos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))
    ) : 'Congrats! All your todos are finished'}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(shape({
    id: PropTypes.number,
  })).isRequired,
};

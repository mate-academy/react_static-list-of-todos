import React from 'react';
import PropTypes from 'prop-types';

import './todolist.scss';
import { Todo, todoType } from '../Todo';

export function TodoList({ preparedTodos }) {
  return (
    <div className="TodoList">
      {preparedTodos.map(item => (
        <div key={item.id}>
          <Todo {...item} />
        </div>
      ))}
    </div>
  );
}

TodoList.propType = {
  preparedTodos: PropTypes.arrayOf(todoType).isRequired,
};

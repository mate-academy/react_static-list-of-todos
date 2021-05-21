import React from 'react';
import PropType from 'prop-types';

import { User } from '../User/User';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <>
    {preparedTodos.map(todo => (
      <div className="todo-list">
        <User {...todo} />
        <Todo {...todo} key={todo.id} />
      </div>
    ))}
  </>
);

TodoList.propTypes = {
  preparedTodos: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
    }),
  ).isRequired,
};

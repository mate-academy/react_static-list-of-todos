import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todo }) => (
  <>
    {todo.map(td => (
      <div className="todo__card" key={td.id}>
        <Todo todo={td} />
      </div>
    ))}
  </>
);

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

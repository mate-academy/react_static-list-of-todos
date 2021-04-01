import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ list }) => (
  <div className="todoList">
    {list.map(todo => (
      <React.Fragment key={todo.id}>
        <Todo {...todo} />
      </React.Fragment>
    ))}
  </div>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

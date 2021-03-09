import PropTypes from 'prop-types';
import React from 'react';
import './TodoList.scss';
import { Todo } from '../Todo';

export function TodoList({ preparedTodos }) {
  const allList = preparedTodos.map(todo => (
    <Todo key={todo.id} {...todo} />
  ));

  return (
    <ul className="app__list">
      {allList}
    </ul>
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  preparedTodos: [],
};

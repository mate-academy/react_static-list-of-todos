import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TodosItem } from '../TodosItem';
import './TodosList.scss';

export const TodosList = ({ preparedTodos }) => (
  <ul className="TodosList">
    {preparedTodos.map(todo => (
      <li
        className={classNames('TodosItem',
          { 'TodosItem--done': todo.completed === true })}
        key={todo.id}
      >
        <TodosItem {...todo} />
      </li>
    ))}
  </ul>
);

TodosList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.object,
    }).isRequired,
  ).isRequired,
};

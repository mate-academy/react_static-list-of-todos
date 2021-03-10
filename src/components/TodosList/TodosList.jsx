import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TodosItem } from '../TodosItem';
import { UserType } from '../../types';
import './TodosList.scss';

export const TodosList = ({ preparedTodos }) => (
  <ul className="TodosList">
    {preparedTodos.map(todo => (
      <li
        className={classNames('TodosItem',
          { 'TodosItem--done': todo.completed })}
        key={todo.id}
      >
        <TodosItem todo={todo} />
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
      user: UserType,
    }).isRequired,
  ).isRequired,
};

TodosItem.defaultProps = {
  user: {
    phone: null,
    username: null,
    website: null,
    company: null,
  },
};

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TodosItem } from '../TodosItem';
import { TodoType } from '../../types';
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
  preparedTodos: PropTypes.arrayOf(TodoType).isRequired,
};

TodosItem.defaultProps = {
  user: {
    phone: null,
    username: null,
    website: null,
    company: null,
  },
};

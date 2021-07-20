import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Todo } from '../Todo';
import { PreparedTodos } from '../../types/PreparedTodos';
import './TodoList.scss';

export const TodoList = ({ listOfTodods }) => (
  <ul className={cn('todos-list', 'content__list')}>
    {listOfTodods.map(todo => (
      <li key={todo.id} className="todos-list__card">
        <Todo {...todo} />
      </li>
    ))
    }
  </ul>
);

TodoList.propTypes = {
  listOfTodods: PropTypes.arrayOf(PreparedTodos).isRequired,
};

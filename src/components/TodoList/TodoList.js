import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Todo } from '../Todo';
import { PreparedTodosType } from '../../types/PreparedTodosType';
import './TodoList.scss';

export const TodoList = ({ listOfTodods }) => (
  <ul className={
    classNames('todos-list', 'content__list')}
  >
    {listOfTodods.map(todo => (
      <li key={todo.id} className="todos-list__card">
        <Todo {...todo} />
      </li>
    ))
    }
  </ul>
);

TodoList.propTypes = {
  listOfTodods: PropTypes.arrayOf(PreparedTodosType).isRequired,
};

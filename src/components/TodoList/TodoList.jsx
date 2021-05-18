import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import { User } from '../User';

import './TodoList.scss';

export const TodoList = ({ prepared }) => (
  <>
    <ul className="todo_list">
      {prepared.map(todo => (
        <li className="todo_item" key={todo.id}>
          <Todo {...todo} />
          <User {...todo} />
        </li>
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  prepared: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import './TodoList.css';

export function TodoList({ listOfTodo }) {
  return (
    <ul className="list">
      {listOfTodo.map(todo => (
        <li key={listOfTodo.id} className="list__item">
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  listOfTodo: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

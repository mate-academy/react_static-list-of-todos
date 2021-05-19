import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = ({ lists }) => (
  <ul className="List">
    {lists.map(list => (
      <li
        className="List__item"
        key={list.id}
      >
        <Todo {...list} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TodoList;

import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList({ list }) {
  return (
    <ul className="list">
      {list.map(el => (
        <li className="item">
          <Todo title={el.title} completed={el.completed} user={el.user} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

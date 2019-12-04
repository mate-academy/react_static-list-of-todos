import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function TodoItem({ item }) {
  return (
    <>
      <li className="app__element">
        ID:
        {item.id}
        {' '}
        <span className="app__name">
          <User user={item.user} />
        </span>
        {' '}
        Task:
        <span className="app__title">
          {' '}
          {item.title}
        </span>
        {' '}
        Completed:
        {' '}
        <span className="app__completed">
          {item.completed ? 'done' : 'inprocess'}
        </span>
      </li>
      <br />
    </>
  );
}

TodoItem.propTypes = { item: PropTypes.string.isRequired };

export default TodoItem;

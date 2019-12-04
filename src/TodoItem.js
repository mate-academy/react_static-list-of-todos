import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todosUsers }) {
  // eslint-disable-next-line
  return todosUsers.map((item) => {
    return (
      <>
        <li className="app__element">
          ID:
          {item.id}
          {' '}
          <span className="app__name">
            {item.user.name}
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
  });
}

TodoItem.PropTypes = {
  // eslint-disable-next-line
  todosUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoItem;

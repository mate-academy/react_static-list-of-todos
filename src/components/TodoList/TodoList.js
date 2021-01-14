import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { User } from '../User';
// import { TypeTodo } from '../../types';

export const TodoList = ({ puzzled }) => (
  <ol>
    {puzzled.map(task => (
      <>
        <li key={task.id}>
          <User name={task.user.name} />
          <br />
          <Todo todo={task} />
        </li>
        <br />
      </>
    ))}
  </ol>
);

TodoList.propTypes = {
  puzzled: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

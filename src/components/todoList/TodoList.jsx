import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../todo';

export const TodoList = ({ preparedTodos }) => (
  preparedTodos.map(ele => (
    <div key={ele.id}>
      <Todo {...ele} />
    </div>
  ))
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

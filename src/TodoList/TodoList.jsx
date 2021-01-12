import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem';

export const TodoList = ({ preparedTodos }) => (
  preparedTodos.map(
    item => (<TodoItem key={item.id} {...item} />),
  )
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      completed: PropTypes.string.isRequired,
      user: PropTypes.array.isRequired,
    }).isRequired,
  ),
};

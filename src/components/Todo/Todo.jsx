import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ todo }) => (
  <>
    <td className="table-secondary">
      {todo.id}
    </td>

    <td className="table-light">
      {todo.title}
    </td>

    <td className="table-secondary">
      {todo.completed
        ? 'true'
        : 'false'
      }
    </td>

    <td className="table-light">
      <User user={todo.user} />
    </td>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }),
};

Todo.defaultProps = {
  todo: [],
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ todo }) => (
  <>
    <div>
      <span>
        <User user={todo.user} />
      </span>
      <span>
        {todo.completed ? ' has completed ' : ' hasnt completed '}
      </span>
      <span>
        {todo.title}
      </span>
    </div>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};
Todo.defaultProps = {
  todo: [],
};

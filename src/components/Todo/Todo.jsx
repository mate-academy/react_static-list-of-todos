import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ todoVar }) => (
  <>
    <div>
      <span>
        <User user={todoVar.user} />
      </span>
      <span>
        {todoVar.completed ? ' has completed ' : ' hasnt completed '}
      </span>
      <span>
        {todoVar.title}
      </span>
    </div>
  </>
);

Todo.propTypes = {
  todoVar: PropTypes.shape({
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
  todoVar: [],
};

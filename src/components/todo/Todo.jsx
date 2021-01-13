import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../user/User';

export const Todo = ({ title, completed, user }) => (
  <div className="user-info">
    <p>
      <span className="task-handler handler">{`Task: `}</span>
      <span>{`${title}`}</span>
    </p>
    <p>
      <span className="state-handler handler">{`Done: `}</span>
      <span className={`state-text ${completed ? 'finished' : 'unfinished'}`}>
        {`${completed ? 'Yes' : 'No'}`}
      </span>
    </p>
    <User {...user} />
  </div>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Todo.defaultProps = {
  user: {},
};

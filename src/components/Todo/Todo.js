import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

import User from '../User/User';

const Todo = ({ title, completed, user }) => (
  <>
    <div>
      <p>{`Title: ${title}`}</p>
      <User {...user} />
    </div>
    <p>
      {`Status: `}
      {completed ? (
        <span className="possitive">Completed</span>
      ) : (
        <span className="negative">Not yet</span>
      )}
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export const Todo = ({ id, title, completed, user }) => (
  <div className="Todo">
    <User name={user.name} />

    <p className="Todo__title">
      <span className="Todo__task">
        {`Task: ${title}`}
      </span>
    </p>

    <p className="Todo__status">
      Status:
      {completed
        ? (<span className="Todo__Status-true"> Completed</span>)
        : (<span className="Todo__Status-false"> Incompleted</span>)}
    </p>
  </div>
);

const typeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: typeUser.isRequired,
  completed: PropTypes.bool.isRequired,
};

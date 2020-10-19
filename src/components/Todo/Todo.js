import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="Todo">
    <h3 className="Todo__title">
      {'Task: '}
      {title}
    </h3>

    <div className="Todo__details">
      <User {...user} />

      {completed
        ? <div className="Todo__status Todo__status--completed">Completed</div>
        : <div className="Todo__status">Not completed</div>}
    </div>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

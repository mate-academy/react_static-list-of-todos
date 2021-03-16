import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ activity }) => (
  <>
    <p className="activity__status">
      {activity.completed ? '🗸' : '✗'}
      {' '}
      {activity.title}
    </p>
    <p className="activity__user">
      <User user={activity.user} />
    </p>
  </>
);

Todo.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

Todo.defaultProps = {
  activity: '',
};

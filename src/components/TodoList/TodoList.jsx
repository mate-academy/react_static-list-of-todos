import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ activities }) => (
  <>
    <ul className="list">
      {activities.map(activity => (
        <li key={activity.id} className="list__item">
          <Todo activity={activity} />
        </li>
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  activities: [],
};

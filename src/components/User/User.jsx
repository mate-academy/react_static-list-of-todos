import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './User.scss';

export const User = ({ fullName, tasks }) => (
  <>
    <li>
      <h2 className="name">{fullName}</h2>

      <ol>
        {tasks.map(task => (
          <Todo {...task} key={task.id} />
        ))}
      </ol>
    </li>
  </>
);

const TypeTasks = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
});

User.propTypes = {
  fullName: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    TypeTasks,
  ),
};

User.defaultProps = {
  tasks: [],
};

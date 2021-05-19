import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './User.scss';

const User = ({ fullName, tasks }) => (
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

User.propTypes = {
  fullName: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

User.defaultProps = {
  tasks: [],
};

export default User;

import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <>
    <div>
      <User {...user} />
      <td>
        <div className="title">{title}</div>
      </td>
      <td>
        <div className="completed">
          {completed ? 'Completed' : 'In progress'}
        </div>
      </td>
    </div>
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

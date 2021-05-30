import React from 'react';
import PropTypes from 'prop-types';
import './ToDo.css';
import { User } from '../user';

export const ToDo = ({ content }) => {
  const { title, completed, user } = content;

  return (
    <div className="todo">
      <p className="title">
        {title}
        <input
          className="checkmark"
          type="checkbox"
          checked={completed}
          readOnly
        />
      </p>
      <User owner={user} />
    </div>
  );
};

ToDo.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

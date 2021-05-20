import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <h1 className="title">{title}</h1>
    <div>
      <User {...user} />
    </div>
    <span className="status">
      {`Status: ${completed ? 'completed' : 'in progress'}`}
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <div className="App__card">
      <h3 className="App__title">
        {title}
      </h3>

      <p className={completed ? 'App__completed' : 'App__in-work'}>
        {completed ? 'true' : 'false'}
      </p>

      <User {...user} />
    </div>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

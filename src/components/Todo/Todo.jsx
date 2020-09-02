import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import itemCompleted from 'classnames';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <User {...user} />
    <p>{title}</p>
    <p className={itemCompleted({
      'item__-ready': completed,
      'item__not-ready': !completed,
    })}
    >
      {completed ? 'ready' : 'not ready'}
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};

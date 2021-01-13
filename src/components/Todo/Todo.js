import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User/User';

export const Todo = ({ title, completed, userName }) => (
  <>
    <User name={userName} />
    <span className={
      completed
        ? 'condition condition--completed'
        : 'condition condition--uncompleted'}
    />
    <span className="todo__task">{title}</span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

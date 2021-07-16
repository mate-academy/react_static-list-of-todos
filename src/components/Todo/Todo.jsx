import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { User } from '../User';
import './Todo_Styles.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <h2 className="title">
      {title}
    </h2>
    <p
      className={classNames({
        completed,
        notCompleted: !completed,
      })}
    >
      {completed ? 'It is done' : 'It is not done yet'}
    </p>
    <User userName={user.name} />
  </>
);

export const TodoType = propTypes.shape({
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  user: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
});

Todo.propTypes = {
  ...TodoType,
};

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { userType } from '../../types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <li
    className={classNames('list__item',
      { 'list__item--done': completed })}
  >
    <div className="list__group">
      <User human={user} />
      <p className="list__title">{`Task: ${title}`}</p>
    </div>
    {completed
      ? <p className="list__result">done</p>
      : <p className="list__result">task is in progress</p>}
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: userType.isRequired,
};

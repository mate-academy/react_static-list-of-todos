import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ id, user, title, completed }) => (
  <>
    <div className="todo__Number">{id}</div>
    <User user={{
      ...user, completed,
    }}
    />
    <div className="todo__Title">{title}</div>
    <strong className={
      classNames('status',
        { 'status--completed': completed })}
    />
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.objectOf(),
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};

Todo.defaultProps = {
  user: {},
  completed: false,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';
import { UserType } from '../types';

export const Todo = ({ user, title, completed }) => (
  (
    <div className="item__container">
      <User userName={user} />
      <h2>
        <i>
          {title}
        </i>
      </h2>
      {completed
        ? (
          <span className="item__completed">✔</span>
        )
        : (
          <span className="item__uncompleted">✘</span>
        )}
    </div>
  )
);

Todo.propTypes = {
  user: UserType,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

Todo.defaultProps = {
  user: [],
};

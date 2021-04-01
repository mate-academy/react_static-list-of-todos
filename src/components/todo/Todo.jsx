import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../user';
import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <div className="container">
    <User user={user.name} />
    Task:
    <p className="container__title">{title}</p>
    Result:
    {
     (completed) ? <h3 className="container____completed">Done</h3>
       : <h3 className="container__not-completed">No</h3>
    }
  </div>
);

const TodoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
});

Todo.propTypes = TodoType.isRequired;

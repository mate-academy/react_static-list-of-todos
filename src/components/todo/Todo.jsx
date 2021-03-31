import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../user';
import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <div className="conteiner">
    <User user={user.name} />
    Task:
    <p className="conteiner__title">{title}</p>
    Result:
    {
     (completed) ? <h3 className="conteiner__done">Done</h3>
       : <h3 className="conteiner__no">No</h3>
    }
  </div>
);

const TodoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool,
});

Todo.propTypes = TodoType.isRequired;

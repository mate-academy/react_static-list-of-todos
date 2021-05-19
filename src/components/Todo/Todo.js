import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ id, title, completed, user }) => (
  <>
    <div className="card__list">
      <User {...user} />
      <div className="todoTitle">{`Task №${id}: ${title}`}</div>
      <div className="todoStatus">
        Status:
        {completed ? (
          <span className="card__success"> Done</span>
        ) : (
          <span className="card__failed"> Doing</span>
        )}
      </div>
    </div>
  </>
);

const TypeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  completed: PropTypes.bool.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './todo.scss';

export const Todo = ({
  title,
  completed,
  users,
}) => (
  <>
    <h2 className="title">
      {title}
    </h2>
    <p className="boolean">
      {completed ? (
        <span className="boolean__true">True</span>
      ) : (
        <span className="boolean__false">False</span>
      )}
    </p>
    <User {...users} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  users: PropTypes.shape().isRequired,
};

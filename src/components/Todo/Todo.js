import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ id, title, completed, user }) => (
  <section className="card">
    <p>{id}</p>
    <User {...user} />
    <p>{title}</p>
    <p>
      {completed
        ? <p className="active">Done</p>
        : <p className="disable">Not done</p>}
    </p>
  </section>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};

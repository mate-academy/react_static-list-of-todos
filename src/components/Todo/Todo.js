import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ id, title, completed, user }) => (
  <section className="card">
    <p>{id}</p>
    <User {...user} />
    {title}
    <p>
      {completed
        ? <p className="done">Done</p>
        : <p className="not__done">Not done</p>}
    </p>
  </section>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ data }) => (
  <div className="todo">
    <div className="title">{data.title}</div>
    {data.completed
      ? <div className="completed" />
      : ''
    }
    <User
      name={data.name}
      username={data.username}
      email={data.email}
    />
  </div>
);

Todo.propTypes = {
  data: {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }.isRequired,
};

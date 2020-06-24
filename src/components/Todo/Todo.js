import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export const Todo = props => (
  <div className="card">
    <p>{props.id}</p>
    {props.title}
    <p>{`${props.completed ? 'done' : 'not done'}`}</p>
    <User {...props.name} />
  </div>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.objectOf(PropTypes.any).isRequired,
};

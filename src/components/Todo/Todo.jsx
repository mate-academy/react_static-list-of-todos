import React from 'react';
import { User } from '../User';
import './Todo.scss'
import PropTypes from 'prop-types';
import { UserType } from '../../types'

export const Todo = ({ title, completed, user }) => (
  <div className='todo'>
    <User key={user.id} user={user}/>
    <h3>{title}</h3>
    <p>current status: {`${completed}`}</p>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserType,
};

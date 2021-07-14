import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User';

export function Todo({ title, completed, user }) {
  const status = completed === false ? 'Status: planned' : 'Status: done';
  return (
    <div>
      <User {...user}/>
      <div className='title'>Plan: {title}</div>
      <div>
        {status}
      </div>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};

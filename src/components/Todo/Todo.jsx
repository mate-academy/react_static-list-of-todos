import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User'

export const Todo = ({ title, completed, user }) =>(
  <div className='card'>
    <User user={user} />
    <p className='taskDescription'>{title}</p>
    {completed
    ?
    <p className='complited'>Well done!</p>
    :
    <p className="notComplited">Just do it!</p>}
  </div>
)

Todo.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { User } from '../User'

export const Card = ({ title, completed, user }) =>(
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

Card.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

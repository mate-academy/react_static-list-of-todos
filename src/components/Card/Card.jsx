import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export const Card = ({ title, completed, user }) =>(
  <div className='card'>
    <h2 className='taskName'>{user}</h2>
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

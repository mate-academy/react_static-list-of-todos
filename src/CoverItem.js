import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export const CoverItem = ({ title, completed, user }) => (
  <li className={completed ? 'item item--true' : 'item'}>
    <div className="item__info--user">
      <p>
        Name:
        {' '}
        {user.name}
      </p>
      <p>
        Username:
        {' '}
        {user.username}
      </p>
      <p>
        Email:
        {' '}
        {user.email}
      </p>
    </div>
    {/* eslint-disable-next-line react/prop-types */}
    <p>{title[0].toUpperCase() + title.slice(1)}</p>
  </li>
);

CoverItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

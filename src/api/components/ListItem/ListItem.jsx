import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';
import { User } from '../User/User';

export const ListItem = ({ user, title, completed }) => (
  <>
    <User name={user} />
    <th className={completed
      ? 'todoItem todoItem--completed'
      : 'todoItem todoItem--notdone'}
    >
      {title}
    </th>
  </>
);

ListItem.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';
import { User } from '../User/User';

export const ListItem = ({ toDo }) => (
  <>
    <User name={toDo.user} />
    <th className={toDo.completed
      ? 'todoItem todoItem--completed'
      : 'todoItem todoItem--notdone'}
    >
      {toDo.title}
    </th>
  </>
);

ListItem.propTypes = {
  toDo: PropTypes.shape({
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

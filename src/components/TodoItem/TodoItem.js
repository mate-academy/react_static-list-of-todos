import React from 'react';
import PropTypes from 'prop-types';
import { User, UserType } from '../User/User';

export function TodoItem({ title, user, completed }) {
  return (
    <>
      <User user={user} />
      <p>
        <strong>  Task: </strong>
        {title}
        <strong>  Status: </strong>
        {completed ? 'Done' : 'In the process'}
      </p>
    </>
  );
}

export const ItemTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserType.isRequired,
});

TodoItem.propTypes = ItemTypes.isRequired;

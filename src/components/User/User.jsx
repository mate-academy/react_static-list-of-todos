import React from 'react';
import { TodoTypes } from '../../types';

export const User = ({ user }) => (
  <>
    {user.name}
  </>
);

User.propTypes = {
  user: TodoTypes.user.isRequired,
};

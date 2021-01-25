import React from 'react';
import { UserTypes } from './type';

export const User = ({ name, username }) => (
  <>
    <strong>
      {name}
      {' '}
      {username}
      :
    </strong>
  </>
);

User.propTypes = UserTypes.isRequired;

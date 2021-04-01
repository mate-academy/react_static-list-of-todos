import React from 'react';
import { UserType } from '../../types';

export const User = ({ name }) => (
  <>
    <h2 className="todo-item__name">
      {name}
    </h2>
  </>
);

User.propTypes = UserType.isRequired;

import React from 'react';
import { UserShape } from '../../shapes';

export const User = ({ name }) => (
  <div>
    <strong>
      Person
    </strong>
    {' : '}
    {name}
  </div>
);

User.propTypes = UserShape;

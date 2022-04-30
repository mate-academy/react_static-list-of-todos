import React from 'react';
import { Users } from '../../../types/interfaces';

export const UserInfo: React.FC<Users> = ({ name, email }) => (
  <>
    <span>
      {`Name: ${name}`}
    </span>
    <span>
      {`Email: ${email}`}
    </span>
  </>
);

import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <>
    {`Responsible: ${name}. Email: ${email}`}
  </>
);

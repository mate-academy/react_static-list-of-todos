import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <strong>{`Name: ${name} | Email: ${email}`}</strong>
  </>
);

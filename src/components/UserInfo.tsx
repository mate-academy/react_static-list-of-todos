import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<{ currentUser: User }> = ({ currentUser }) => (
  <>
    <span>{currentUser.name}</span>
    <span>{currentUser.email}</span>
  </>
);

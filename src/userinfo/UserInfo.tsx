import React from 'react';

/* type Props = {
  user: User;
}; */

type User = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    {`Name: ${name} - Email: ${email}`}
  </>
);

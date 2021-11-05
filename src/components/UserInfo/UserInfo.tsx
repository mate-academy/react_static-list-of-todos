import React from 'react';

interface User {
  name: string | undefined,
  email: string | undefined,
}

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <div>
      {`Task performer: ${name}`}
    </div>
    <div>
      {`Contact: ${email}`}
    </div>
  </>
);

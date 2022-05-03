import React from 'react';

type Props = {
  name: string,
  userId: number,
  email: string,
  phone: string
};

export const UserInfo: React.FC<Props> = ({
  name,
  userId,
  email,
  phone,
}) => {
  return (
    <>
      <li>
        {`Id: ${userId}`}
      </li>
      <li>
        {`Name: ${name}`}
      </li>
      <li>
        {`Email: ${email}`}
      </li>
      <li>
        {`Phone: ${phone}`}
      </li>
    </>
  );
};

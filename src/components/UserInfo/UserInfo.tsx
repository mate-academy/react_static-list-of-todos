import React from 'react';

interface Props {
  name: string | undefined,
  email: string | undefined
}

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="content">
      <div>
        {'Performer: '}
        <strong>{name}</strong>
      </div>
      <div>
        {'Contact to performer: '}
        {email}
      </div>
    </div>
  );
};

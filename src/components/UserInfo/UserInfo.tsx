import React from 'react';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="
    card-footer-item
    is-flex
    is-align-items-flex-start
    is-flex-direction-column"
  >
    <div>{`Name: ${name}`}</div>
    <div>{`Email: ${email}`}</div>
  </div>
);

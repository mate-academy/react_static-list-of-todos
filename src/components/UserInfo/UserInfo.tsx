import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
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

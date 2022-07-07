import React from 'react';

import 'bulma/css/bulma.min.css';
import { Block } from 'react-bulma-components';

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
}

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <Block backgroundColor="primary" textColor="white" style={{}}>
      <div data-cy="">
        <i data-cy="username">{user.name}</i>
        <p data-cy="email">{user.email}</p>
      </div>
    </Block>
  );
};

import React from 'react';
import { Icon } from 'semantic-ui-react';

const User = ({ user }) => (
  [<Icon name="user outline" />, user.name]
);

export default User;

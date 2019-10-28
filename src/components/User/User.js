import React from 'react';
import { List } from 'semantic-ui-react';

function User(props) {
  const {user} = props;
  return (
    <List>
      <List.Item icon='users'
        content={<p>{user.name}</p>}
      />
      <List.Item
        icon='mail'
        content={<a href={`${user.email}`}>{user.email}</a>}
      />
    </List>
  );
}

export default User;

import React from 'react';
import { Table } from 'semantic-ui-react';

function User({ user }) {
  return (
    <Table.Cell><a href={`mailto:${user.email}`}>{user.name}</a></Table.Cell>
  );
}

export default User;

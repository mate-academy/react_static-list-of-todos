import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const User = ({ user }) => <Table.Cell>{user.name}</Table.Cell>;

User.propTypes = { user: PropTypes.objectOf(PropTypes.any).isRequired };

export default User;

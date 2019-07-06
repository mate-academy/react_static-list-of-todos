import React from 'react';
import PropTypes from 'prop-types';
import User, { userShape } from './User';

function UserList(props) {
  return (
    props.users.map(u => <User key={u.id} user={u} />)
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired,
};
export default UserList;

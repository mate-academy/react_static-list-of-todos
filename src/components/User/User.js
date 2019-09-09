import React from 'react';
import './User.css';
import { UserPropTypes } from '../../constants/proptypes';

function User(props) {
  return (
    <>
      <p className="user-name">
        {props.user.name}
      </p>
      <p className="user-mail">
        {props.user.email}
      </p>
      <p className="user-website">
        {props.user.website}
      </p>
    </>
  );
}

User.propTypes = UserPropTypes;

export default User;

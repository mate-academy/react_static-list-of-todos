import React from 'react';

const User = props => (
  <>
    <p>Name : {props.user.name}</p>
    <p>Email : {props.user.email}</p>
    <p>Phone : {props.user.phone}</p>
  </>

);

export default User;

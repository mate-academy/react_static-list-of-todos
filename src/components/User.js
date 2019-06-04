import React from 'react';

const User = props => {
  return (
    <div className='user'>
      <p className='user-name'>User name: {props.name}</p>
      <p className='user-email'>User email: {props.email}</p>
    </div>
  );
};

export default User;

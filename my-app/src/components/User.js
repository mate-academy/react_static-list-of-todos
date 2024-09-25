import React from 'react';

function User(props) {

  return (
    <React.Fragment>
    {props.user.name}
    </React.Fragment>
  );
}

export default User;
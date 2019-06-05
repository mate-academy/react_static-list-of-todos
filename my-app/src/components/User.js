import React from 'react';


function User(props) {
    return (
    <div>
      <h2>{props.name} ({props.phone})</h2>
    </div>
  );
}

export default User;
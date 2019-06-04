import React from 'react';

function User(props) {
    return <div><span>Author:</span> {props.name}; <span>email:</span> {props.email}</div>
}

export default User;
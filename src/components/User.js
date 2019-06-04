import React from 'react';
import './User.css';

function User(props) {

    return (
        <div className='user'>
            <a href={props.user.email}>{props.user.username}</a>
        </div>
    );
}

export default User;
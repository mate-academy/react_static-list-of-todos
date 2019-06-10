import React from 'react';

function User(props) {
    return (
        <a href={`mailto:${props.mail}`}>
            {props.name}
        </a>
    );
}

export default User;

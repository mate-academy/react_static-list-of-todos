import React from 'react';

export function TodoUser(props) {
    const { name, username, email, website, phone } = props;

    return (
        <section>
            <h3>{name}</h3>
            <h5>{username}</h5>
            <p>{email}</p>
            <span>{website}</span>
            <span>{phone}</span>
        </section>
    );
}

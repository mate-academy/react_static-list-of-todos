import React from 'react';

export default function TodoUser(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h5>{props.username}</h5>
            <p>{props.email}</p>
            <span>{props.website}</span>
            <span>{props.phone}</span>
        </div>
    )
}

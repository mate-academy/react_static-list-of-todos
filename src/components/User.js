import React from 'react';

function User(props) {
  return (
    <p>
      <span className="author">Author: {props.name}</span> email: <a href="mailto: {this.props.email}">{props.email}</a> 
    </p>
  )
}

export default User;

import React from 'react';

function User(props) {
  const { name, phone, email } = props.user;

  return (
    <>
      <p className="todoList__item-name">{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </>
  );
}

export default User;

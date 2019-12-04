/* eslint-disable */
import React from 'react';

const User = ({user}) => (  // eslint-disable-line
  <>
    <ul>
      USER INFO:
      <li>
        name:
        {user.name}
      </li>
      <li>
        username:
        {user.username}
      </li>
      <li>
        phone:
        {user.phone}
      </li>
      <li>
        email:
        {user.email}
      </li>
      <li>
        website:
        {user.website}
      </li>
      <li>
        zipcode:
        {user.address.zipcode}
      </li>
      <li>
        company:
        {user.company.name}
      </li>
    </ul>
  </>
);

export default User;

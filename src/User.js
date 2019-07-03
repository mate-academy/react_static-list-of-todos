import React from 'react';
import propTypes from 'prop-types';

const User = props => (
  <ul className="todo-item__user">
    <li>
      Name:
      {props.user.name}
    </li>
    <li>
      Username:
      {props.user.username}
    </li>
    <li>
      Email:
      {props.user.email}
    </li>
    <li>
      Website:
      <a href={props.user.website}>{props.user.website}</a>
    </li>
    <li>
      Address:
      {props.user.address.city}
    </li>
    <li>
      Company:
      {props.user.company.name}
    </li>
  </ul>
);

User.propTypes = {
  user: propTypes.shape({
    name: propTypes.string,
    username: propTypes.string,
    email: propTypes.string,
    website: propTypes.string,
    address: propTypes.object,
    company: propTypes.object,
  }).isRequired,
};

export default User;

// Don't forget to import the React library

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

// Add a default export statement for UserInfo component to use it in the other files
import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <h3 className="userInfo__title">
      User info:
    </h3>
    <div className="userInfo__content">
      <div className="userInfo__item">
        {`Name: ${user.name}`}
      </div>
      <div className="userInfo__item">
        {`Email: ${user.email}`}
      </div>
    </div>
  </div>
);

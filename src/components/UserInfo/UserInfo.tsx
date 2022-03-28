import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="todo-list__user-info card">
    <h3 className="card__name">{user.name}</h3>
    <div className="card__description description">
      <h4 className="description__username">{`User: ${user.username}`}</h4>

      <div className="description__info">
        <div className="description__title">
          Phone
        </div>

        <a href={`tel:${user.phone}`} className="description__link">
          {user.phone}
        </a>
      </div>

      <div className="description__info">
        <div className="description__title">
          Email
        </div>

        <a href={`mailto:${user.email}`} className="description__link">
          {user.email}
        </a>
      </div>

      <div className="description__info">
        <div className="description__title">
          Website
        </div>

        <a
          href={`https://${user.website}`}
          target="_blank"
          className="description__link"
          rel="noreferrer"
        >
          {user.website}
        </a>
      </div>
    </div>
  </div>
);

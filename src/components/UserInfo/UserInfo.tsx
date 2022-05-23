import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';

import { UserFromServer } from '../../react-app-env';
import './UserInfo.scss';

type Props = {
  userInfo: UserFromServer;
};

export const UserInfo: React.FC<Props> = ({ userInfo }) => {
  const {
    name,
    phone,
    email,
    address,
  } = userInfo;

  return (
    <div className="todoUserInfoWrapper">
      <Chip
        className="userName"
        data-cy="username"
        icon={<AccountCircleIcon />}
        label={name}
        color="primary"
        variant="outlined"
      />

      <Chip
        className="userPhone"
        icon={<PhoneIcon />}
        label={phone}
        color="primary"
        variant="outlined"
      />

      <Chip
        className="userEmail"
        data-cy="email"
        icon={<MailIcon />}
        label={email}
        color="primary"
        variant="outlined"
      />

      <Chip
        className="userAddress"
        icon={<LocationOnIcon />}
        label={`City: ${address.city}. Street: ${address.street}.`}
        color="primary"
        variant="outlined"
      />
    </div>
  );
};

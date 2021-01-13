import React from 'react';
import { UserType } from '../types';

function User({ data }) {
  return (
    <>
      {data.name}
    </>
  );
}

User.propTypes = {
  data: UserType.isRequired,
};

export default User;

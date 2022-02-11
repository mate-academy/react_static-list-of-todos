import React from 'react';

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

type Prop = {
  person: User | null;
};

const UserInfo: React.FC<Prop> = ({ person }) => {
  return (
    <h3>
      {person !== null ? person.name : 'net takogo cheloveka'}
      {' - '}
      {person !== null ? person.email : 'net takogo cheloveka'}
    </h3>
  );
};

export default UserInfo;

/// <reference types="react-scripts" />

export interface TodoFromServer {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface UserFromServer {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface Geo {
  lat: string,
  lng: string,
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface TodoWidthUser extends TodoFromServer {
  user: UserFromServer | null;
}

export interface User {
  username: string,
  email: string,
  address: UserAddress,
  phone: string,
}

export interface UserAddress {
  city: string;
  street: string;
}

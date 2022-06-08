export interface User {
  name: string;
  email: string;
  username: string,
  adress?: Adress,
  phone: string,
  website: string,
  company: Company,
}

export interface Adress {
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
  name: string,
  catchPhrase: string,
  bs: string,
}

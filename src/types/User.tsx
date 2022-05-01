interface Geo {
  lat: string,
  lng: string,
}

interface Adress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Adress,
}

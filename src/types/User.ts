interface Address {
  street: string;
  suite: string;
  city: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

export interface Address {
  city: string;
  street: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}
